import "./Profile.css";
import Box from "@mui/joy/Box";
import {
  Avatar,
  Button,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Typography,
  IconButton,
  TextField,
  DialogContentText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import Cardss from "./Cards";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { asyncThunkGetDitailsOfContractor } from "../../redux/createAsyncThunk";
import { useDispatch, useSelector } from "react-redux";

import "./cards.css";
import { showToast } from "../../redux/errorSlice/errorSlice";
import axios from "axios";
import OrganizationTable from "./OrganizationTable";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Profile() {
  const { contractorId } = useParams();
  const dispatch = useDispatch();
  const { ContractorDataById } = useSelector((store) => store.admin);
  const [formattedDate, setFormattedDate] = useState();
  const [addOrganizationId, setAddOrganizationId] = useState("");
  const [open, setOpen] = useState(false);
  const [allClients, setAllClients] = useState();
  const [open3, setOpen3] = useState(false);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const { usertoken } = JSON.parse(localStorage.getItem("token"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

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
      });

  const handleAddOrg = () =>
    axios({
      method: "patch",
      url: "http://localhost:5000/api/addorganization",
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
      data: {
        contractorId: ContractorDataById?.profileId._id,
        clientId: addOrganizationId,
        amount: amount,
      },
    })
      .then((res) => {
        setLoading(!loading);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    getAllOrganizations();
  }, [loading]);

  console.log(ContractorDataById);
  // MUI table
  function createData(name, calories) {
    return { name, calories };
  }
  // MUI table
  const rows = [
    createData("Phone", ContractorDataById?.profileId?.EmergencyContactNumber),
    createData("Email", ContractorDataById?.email),
    createData("Birthday", formattedDate),
    createData("Address", ContractorDataById?.profileId?.Address),
    createData("Gender", ContractorDataById?.profileId?.Gender),
    createData("Reports to", ContractorDataById?.profileId?.ReportTo),
  ];

  useEffect(() => {
    const payload = { contractorId };
    dispatch(asyncThunkGetDitailsOfContractor(payload));

    // Create a Date object with the provided date and time
    const dateObject = new Date(ContractorDataById?.profileId?.Birthday);

    // Extract the components of the date
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Months are zero-based, so add 1
    const year = dateObject.getFullYear() % 100; // Extract last two digits of the year

    // Pad the components with leading zeros if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedYear = year < 10 ? `0${year}` : year;

    // Combine the components into the desired format
    `${formattedDay}/${formattedMonth}/${formattedYear}`;
    setFormattedDate(`${formattedDay}/${formattedMonth}/${formattedYear}`);
  }, [contractorId, dispatch]);

  return (
    <>
      {ContractorDataById?.profileId ? (
        <Box sx={{ backgroundColor: "#F1F6F9" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <Box
              id="profile-head"
              sx={{
                width: { sx: "100%", lg: "30%" },
                backgroundColor: "white",
                margin: "20px",
                marginTop: "40px",
                marginBottom: "20px",
                marginRight: "40px",
                marginLeft: "20px",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "60px",
                  marginBottom: "20px",
                }}
              >
                <Avatar
                  aria-label="recipe"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={"https://mui.com/static/images/avatar/3.jpg"}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Avatar>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "25px", marginBottom: "20px" }}>
                  {ContractorDataById?.first_name}{" "}
                  {ContractorDataById?.last_name}
                </h1>
                <p
                  style={{
                    color: "gray",
                    lineHeight: "10px",
                    marginBottom: "60px",
                  }}
                >
                  {ContractorDataById?.profileId?.Address}
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                width: { sx: "100%", lg: "66%" },
                marginTop: { sx: "0px", lg: "40px" },
                marginRight: "20px",
                marginBottom: "20px",
                marginLeft: { sm: "20px", md: "20px", lg: "0px" },
              }}
            >
              <TableContainer component={Paper}>
                <Table aria-label="caption table">
                  <TableBody sx={{ marginRight: "20px", marginLeft: "20px" }}>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell
                          sx={{
                            fontSize: "15px",
                            fontWeight: "700",
                            paddingLeft: "4%",
                          }}
                          component="th"
                          scope="row"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: "15px",
                            fontWeight: "700",
                            paddingRight: "4%",
                          }}
                          align="right"
                        >
                          {row.calories}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <div className="section" style={{ width: "100%", height: "100%" }}>
            <Cardss ContractorDataById={ContractorDataById} />
          </div>
          <div className="profile-org">
            <OrganizationTable
              setLoading={setLoading}
              tableData={ContractorDataById.profileId.SelfOrganization}
              profileId={ContractorDataById.profileId._id}
            />
          </div>
          <Button
            id="add-organization-btn"
            variant="contained"
            onClick={() => {
              handleClickOpen();
            }}
          >
            Add Organization
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                width: "55ch",
                marginTop: { sx: "0px", lg: "20px" },
                marginRight: "20px",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <DialogTitle
                sx={{ m: 0, p: 0, pt: 2, pb: 2 }}
                id="customized-dialog-title"
              >
                Contractors
              </DialogTitle>
              <TableContainer
                sx={{ border: "1px solid gray" }}
                component={Paper}
              >
                <Table aria-label="caption table">
                  <TableHead id="all-orgzn-head">
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="center">Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allClients &&
                      allClients.map((row) => {
                        return (
                          <TableRow
                            sx={{
                              cursor: "pointer",
                            }}
                            key=""
                            onClick={() => {
                              setAddOrganizationId(row._id);
                              setOpen(false);
                              handleClickOpen3();
                            }}
                          >
                            <TableCell
                              sx={{
                                fontSize: "15px",
                                fontWeight: "700",
                                paddingLeft: "4%",
                              }}
                              component="th"
                              scope="row"
                            >
                              {row.clientName}
                            </TableCell>
                            <TableCell
                              sx={{
                                fontSize: "15px",
                                fontWeight: "700",
                                paddingRight: "4%",
                              }}
                              align="right"
                            >
                              {row.clientEmail}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <DialogActions>
              <Button
                autoFocus
                onClick={() => {
                  handleClose();
                }}
                variant="contained"
                color="error"
              >
                Cancel
              </Button>
            </DialogActions>
          </BootstrapDialog>
          <Dialog open={open3} onClose={handleClose3}>
            <DialogTitle>Amount</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter the amount assigned to contractor for selected
                organization
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="amount"
                label="Amount"
                type="number"
                fullWidth
                variant="standard"
                amount={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose3}>Cancel</Button>
              <Button
                onClick={() => {
                  handleClose3();
                  handleAddOrg();
                }}
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "91vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h4">
              Contractor Has Not Fill The Form.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
