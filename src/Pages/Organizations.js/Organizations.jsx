import React from "react";
import "./Organizations.css";
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
import { useNavigate } from "react-router-dom";
import Loading from "../../Component/common/Loading";

const Organizations = () => {
  const [newOrganisation, setNewOrganisation] = useState();
  const [newOrgName, setNewOrgName] = useState();
  const [allClients, setAllClients] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


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
      url: "http://localhost:5000/api/createClient",
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
      data: {
        clientEmail: newOrganisation,
        clientName: newOrgName,
        // profileId: ContractorDataById?.profileId?._id
      },
    })
      .then((res) => {
        console.log(res);
        setLoading(!loading)
      })
      .catch((err) => {
        console.log(err);
      });

  const getAllOrganizations = () =>
    axios({
      method: "get",
      url: "http://localhost:5000/api/getallClient",
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setAllClients(res.data.data);
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
  }, [loading]);


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
              <label>Name:</label><br/>
              <input
                value={newOrgName}
                type="text"
                onChange={(e) => {
                  setNewOrgName(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Email:</label><br/>
              <input
                value={newOrganisation}
                type="text"
                onChange={(e) => {
                  setNewOrganisation(e.target.value);
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
      {allClients ?
      <div className="all-orgzn">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead id="all-orgzn-head">
              <TableRow>
                <TableCell>Organization</TableCell>
                <TableCell >Email</TableCell>
                <TableCell align="center">Navigation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allClients.map((row) => (
                <TableRow
                  key={row.clientEmail}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.clientName}
                  </TableCell>
                  <TableCell >{row.clientEmail}</TableCell>
                  <TableCell align="center">
                    <Button onClick={()=>{
                      navigate(`/organization/${row._id}`)
                    }}>
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div> : <Loading error = {error} query='Organization'/>}
    </div>
  );
};

export default Organizations;
