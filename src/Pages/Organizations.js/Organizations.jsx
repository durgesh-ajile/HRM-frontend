import React from "react";
import "./Organizations.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Box, Button, NativeSelect, Typography } from "@mui/material";
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
import { showToast } from "../../redux/errorSlice/errorSlice";
import { useDispatch } from "react-redux";

const Organizations = () => {
  const [newOrganisation, setNewOrganisation] = useState();
  const [newOrgName, setNewOrgName] = useState();
  const [allClients, setAllClients] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [allOurOrganization, setallOurOrganization] = useState('');
  const [selectedOrganization, setSelectedOrganization] = useState('');
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
      url: "https://braided-complex-403612.el.r.appspot.com/api/createClient",
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
      data: {
        clientEmail: newOrganisation,
        clientName: newOrgName,
        ourOrganizationId: selectedOrganization,
      },
    })
      .then((res) => {
        setLoading(!loading);
        dispatch(showToast({ type: "success", message: res.data.message}));
      })
      .catch((err) => {
        console.log(err);
        dispatch(showToast({ type: "error", message: err.response.data.message}));
      });

  const getAllOrganizations = () =>
    axios({
      method: "get",
      url: `https://braided-complex-403612.el.r.appspot.com/api/getallClient?ourOrganizationId=${selectedOrganization}&page=${page}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setAllClients(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          setAllClients('')
          setError(404);
        } else if (err.response.status === 422) {
          setError(422);
        } else {
          setError(true);
        }
      });

  const getAllOurOrganizations = () =>
    axios({
      method: "get",
      url: `https://braided-complex-403612.el.r.appspot.com/api/getownorganizationindropdown`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        console.log(res);
        setallOurOrganization(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    getAllOrganizations();
    getAllOurOrganizations();
  }, [loading, page, selectedOrganization]);

  console.log(error);

  return (
    <div className="organizations">
      {allOurOrganization ? (
        <NativeSelect
        sx={{mb:"20px"}}
          value={selectedOrganization}
          inputProps={{
            name: "organization",
            id: "uncontrolled-native",
          }}
          onChange={(e) => {
            setSelectedOrganization(e.target.value);
          }}
        >
          <option selected value="">
            Select
          </option>
          {allOurOrganization.map((organization) => {
            return (
              <option value={organization._id}>{organization.LegalName}</option>
            );
          })}
        </NativeSelect>
      ) : <Typography>
        Unable to fetch our organization data
      </Typography>}
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
              <label>Name:</label>
              <br />
              <input
                value={newOrgName}
                type="text"
                onChange={(e) => {
                  setNewOrgName(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <input
                value={newOrganisation}
                type="text"
                onChange={(e) => {
                  setNewOrganisation(e.target.value);
                }}
              />
            </div>
            {allOurOrganization && (
              <NativeSelect
                value={selectedOrganization}
                inputProps={{
                  name: "organization",
                  id: "uncontrolled-native",
                }}
                onChange={(e) => {
                  setSelectedOrganization(e.target.value);
                }}
              >
                <option selected value="">
                  Select
                </option>
                {allOurOrganization.map((organization) => {
                  return (
                    <option value={organization._id}>
                      {organization.LegalName}
                    </option>
                  );
                })}
              </NativeSelect>
            )}
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
      {allClients ? (
        <div className="all-orgzn">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead id="all-orgzn-head">
                <TableRow>
                  <TableCell>Organization</TableCell>
                  <TableCell>Email</TableCell>
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
                    <TableCell>{row.clientEmail}</TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => {
                          navigate(`/organization/${row._id}?page=1`);
                        }}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Paginations totalPages={allClients.totalPages} />
        </div>
      ) : error === 422 ? (
        <div className="not-present">
        <Box
          sx={{
            width: "100%",
            height: "21vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pb:"50px"
          }}
          id="not-present-box"
        >
          <Box>
            <Typography id="not-present-typo" variant="h4">
              Please select our organization
            </Typography>
          </Box>
        </Box>
    </div>
      ) : (
        <Loading error={error} query="Organization" />
      )}
    </div>
  );
};

export default Organizations;
