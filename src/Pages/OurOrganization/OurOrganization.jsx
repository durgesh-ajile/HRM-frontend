import './OurOrganization.css'
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../Component/common/Loading";
import Paginations from "../../Component/common/Pagination";
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/errorSlice/errorSlice';

const OurOrganization = () => {
  const [gst, setgst] = useState();
  const [newOrgName, setNewOrgName] = useState();
  const [address, setAddress] = useState();
  const [allOurOrganization, setallOurOrganization] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  let page = searchParams.get("page");

  const dispatch = useDispatch();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { usertoken } = JSON.parse(localStorage.getItem("token"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOrganizationSubmit = () =>
    axios({
      method: "post",
      url: "http://localhost:5000/api/createourownorganization",
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
      data: {
        gst: gst,
        legalName: newOrgName,
        address: address
      },
    })
      .then((res) => {
        setLoading(!loading)
        dispatch(showToast({ type: "success", message: res.data.message}));
      })
      .catch((err) => {
        console.log(err);
        dispatch(showToast({ type: "error", message: err.response.data.message}));
      });

  const getAllOrganizations = () =>
    axios({
      method: "get",
      url: `http://localhost:5000/api/getourownorgnization?page=${page}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        console.log(res);
        setallOurOrganization(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404){
          setError(404)
        }else{
          setError(true)
        }
      });

  useEffect(() => {
    getAllOrganizations();
  }, [loading, page]);


  return (
    <div className="organizations">
    
      <div className="add-organization">
        <Button
          id="add-organization-btn"
          variant="contained"
          onClick={() => {
            handleClickOpen();
          }}
        >
          Add Organization
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Add an organization below"}
          </DialogTitle>
          <DialogContent>
            <div>
              <label>Legal Name:</label><br/>
              <input
                value={newOrgName}
                type="text"
                onChange={(e) => {
                  setNewOrgName(e.target.value);
                }}
              />
            </div>
            <div>
              <label>GST:</label><br/>
              <input
                value={gst}
                type="text"
                onChange={(e) => {
                  setgst(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Address:</label><br/>
              <input
                value={address}
                type="text"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClose();
              }}
              autoFocus
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleClose();
                handleOrganizationSubmit();
              }}
              autoFocus
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {allOurOrganization ?
      <div className="all-orgzn">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead id="all-orgzn-head">
              <TableRow>
                <TableCell>Legal Name</TableCell>
                <TableCell >GST</TableCell>
                <TableCell align="center">Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOurOrganization.response.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.LegalName}
                  </TableCell>
                  <TableCell >{row.GST}</TableCell>
                  <TableCell align="center" >{row.Address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Paginations totalPages={allOurOrganization.totalPages} />
      </div> : <Loading error = {error} query='Organization'/>}
    </div>
  );
};

export default OurOrganization;
