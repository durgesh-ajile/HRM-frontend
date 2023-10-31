import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./PoDetails.css";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { AiFillDelete } from "react-icons/ai";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Loading from "../../Component/common/Loading";
import Paginations from "../../Component/common/Pagination";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/errorSlice/errorSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const PoDetail = () => {
  const { poid } = useParams();
  const [loading, setLoading] = useState(false);
  const [poData, setPoData] = useState("");
  const [open, setOpen] = useState(false);
  const [contractor, setContractor] = useState("");
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [removeContractor, setRemoveContractor] = useState("");
  const [error, setError] = useState(false);
  const [addContractorId, setAddContractorId] = useState("");
  const [amount, setAmount] = useState(0);
  const [workingDays, setWorkingDays] = useState("");

  const [searchParams] = useSearchParams();
  let page = searchParams.get("page");

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const { usertoken } = JSON.parse(localStorage.getItem("token"));

  const getSinglePo = () => {
    axios({
      method: "get",
      url: `https://braided-complex-403612.el.r.appspot.com/api/getsinglePo?poId=${poid}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setPoData(res.data.singlePO);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const getContractor = () => {
    axios({
      method: "get",
      url: `https://braided-complex-403612.el.r.appspot.com/api/getContractor?page=${page}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setContractor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveContractor = () => {
    axios({
      method: "delete",
      url: `https://braided-complex-403612.el.r.appspot.com/api/deletecontractorfrompo?poId=${poid}&contractorId=${removeContractor}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        console.log(res);
        setLoading(!loading);
        dispatch(showToast({ type: "success", message: res.data.message}));
      })
      .catch((err) => {
        console.log(err);
        dispatch(showToast({ type: "error", message: err.response.data.message}));
      });
  };

  const handleAddContractor = () => {
    axios({
      method: "patch",
      url: `https://braided-complex-403612.el.r.appspot.com/api/updateContractorintopo`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
      data: {
        contractorId: addContractorId,
        poId: poid,
        contractorAmount: amount,
        businessDays: workingDays
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
  };

  useEffect(() => {
    getSinglePo();
    getContractor();
  }, [loading]);

  useEffect(() => {
    getContractor();
  }, [page]);

  console.log(contractor);
  // console.log(removeContractor);

  const convertDate = (date) => {
    const dateObject = new Date(date);
    const year = dateObject.getUTCFullYear();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      dateObject
    );
    const day = dateObject.getUTCDate();

    const dateTimeString = `${day} ${month} ${year}`;
    return dateTimeString;
  };

  return poData ? (
    <div className="po-details">
      <div className="basic-details">
        <>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            PO Details
          </DialogTitle>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <Box
              sx={{
                width: { sx: "100%", lg: "60%" },
                marginTop: { sx: "0px", lg: "20px" },
                marginRight: "20px",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <TableContainer
                sx={{ border: "1px solid gray" }}
                component={Paper}
              >
                <Table aria-label="caption table">
                  <TableBody>
                    <TableRow key="">
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingLeft: "4%",
                        }}
                        component="th"
                        scope="row"
                      >
                        PO Number
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingRight: "4%",
                        }}
                        align="right"
                      >
                        {poData.PONumber}
                      </TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingLeft: "4%",
                        }}
                        component="th"
                        scope="row"
                      >
                        Issued By Name
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingRight: "4%",
                        }}
                        align="right"
                      >
                        {poData.IssuerName}
                      </TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingLeft: "4%",
                        }}
                        component="th"
                        scope="row"
                      >
                        Issuer Email
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingRight: "4%",
                        }}
                        align="right"
                      >
                        {poData.IssuerEmail}
                      </TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingLeft: "4%",
                        }}
                        component="th"
                        scope="row"
                      >
                        PO Description
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingRight: "4%",
                        }}
                        align="right"
                      >
                        {poData.PODiscription}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box
              sx={{
                width: { sx: "100%", lg: "36%" },
                marginTop: { sx: "0px", lg: "20px" },
                marginRight: "20px",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <TableContainer
                sx={{ border: "1px solid gray" }}
                component={Paper}
              >
                <Table aria-label="caption table">
                  <TableBody>
                    <TableRow key="">
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingLeft: "4%",
                        }}
                        component="th"
                        scope="row"
                      >
                        PO Amount
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingRight: "4%",
                        }}
                        align="right"
                      >
                        {poData.POAmount}
                      </TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingLeft: "4%",
                        }}
                        component="th"
                        scope="row"
                      >
                        Valid From
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingRight: "4%",
                        }}
                        align="right"
                      >
                        {convertDate(poData.ValidFrom)}
                      </TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingLeft: "4%",
                        }}
                        component="th"
                        scope="row"
                      >
                        Valid till
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingRight: "4%",
                        }}
                        align="right"
                      >
                        {convertDate(poData.ValidTill)}
                      </TableCell>
                    </TableRow>

                    <TableRow key="">
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingLeft: "4%",
                        }}
                        component="th"
                        scope="row"
                      >
                        Status
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "15px",
                          fontWeight: "700",
                          paddingRight: "4%",
                        }}
                        align="right"
                      >
                        {poData.IsActive ? (
                          <span>Active</span>
                        ) : (
                          <span>Inactive</span>
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </>
      </div>
      <div className="related-contractor">
        <h3>Contractors</h3>
        <Button
          id="add-po-btn"
          variant="contained"
          onClick={() => {
            handleClickOpen();
          }}
        >
          Add Contractor
        </Button>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="" aria-label="a dense table">
            <TableHead id="all-orgzn-head">
              <TableRow>
                <TableCell align="center">Serial No</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Working Days</TableCell>
                <TableCell align="center">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {poData.Contractors.map((row, index) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}.
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {row.id.first_name} {row.id.last_name}
                  </TableCell>
                  <TableCell align="center">{row.id.email}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell align="center">{row.businessDays}</TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setRemoveContractor(row.id._id);
                      handleClickOpen2();
                    }}
                  >
                    <AiFillDelete />
                  </TableCell>
                </TableRow>
              ))}
              <Dialog
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Delete contractor"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to romove this contractor from this
                    PO?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose2}>Cancel</Button>
                  <Button
                    onClick={() => {
                      handleRemoveContractor();
                      handleClose2();
                    }}
                    autoFocus
                  >
                    Remove
                  </Button>
                </DialogActions>
              </Dialog>
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog open={open3} onClose={handleClose3}>
          <DialogTitle>Amount and working days</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the amount of invoice for selected contractor
            </DialogContentText>
            <TextField
              sx={{ mt: "0px" }}
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
            <DialogContentText sx={{ mt: "30px" }}>
              Enter total working days in a month for the selected contractor
            </DialogContentText>
            <TextField
              sx={{ mt: "0px" }}
              autoFocus
              margin="dense"
              id="amount"
              label="Working days"
              type="number"
              fullWidth
              variant="standard"
              amount={workingDays}
              onChange={(e) => {
                setWorkingDays(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose3}>Cancel</Button>
            <Button
              onClick={() => {
                handleClose3();
                handleAddContractor();
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
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
            {contractor && (
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
                    {contractor.data.map((row) => {
                      return (
                        <TableRow
                          sx={{
                            cursor: "pointer",
                          }}
                          key=""
                          onClick={() => {
                            setAddContractorId(row._id);
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
                            {row.first_name} {row.last_name}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontSize: "15px",
                              fontWeight: "700",
                              paddingRight: "4%",
                            }}
                            align="right"
                          >
                            {row.email}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
            <Paginations totalPages={contractor.totalPages} />
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
      </div>
    </div>
  ) : (
    <Loading error={error} />
  );
};

export default PoDetail;
