import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import "./ContractorInvoices.css";
import Loading from "../../Component/common/Loading";
import { Typography } from "@mui/material";
import { BsFillEyeFill } from "react-icons/bs";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import ViewInvoiceContractor from "./ViewInvoiceContractor";
import Paginations from "../../Component/common/Pagination";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/errorSlice/errorSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ContractorInvoices = () => {
  const [open, setOpen] = useState(false);

  const [pendingData, setPendingData] = useState("");
  const [approvedData, setApprovedData] = useState("");
  const [pendingError, setPendingError] = useState("");
  const [approvedError, setApprovedError] = useState("");
  const [imgLink, setImageLink] = useState("");

  const [loading, setLoading] = useState("");

  const { invoiceid } = useParams();
  const { usertoken } = JSON.parse(localStorage.getItem("token"));

  const [searchParams] = useSearchParams();
  let page = searchParams.get("page");
  let page2 = searchParams.get("page2");

  const dispatch = useDispatch();

  // console.log(page2)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const getApprovedInvoices = () =>
    axios({
      method: "get",
      url: `http://localhost:5000/api/getapprovedinvoicedforadmin?contractorId=${invoiceid}&page=${page}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setApprovedData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          setApprovedError(404);
          setApprovedData("");
        } else {
          setApprovedError(true);
        }
      });

  const getPendingInvoices = () =>
    axios({
      method: "get",
      url: `http://localhost:5000/api/getpendinginvoiceforadmin?contractorId=${invoiceid}&page=${page2}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setPendingData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          setPendingError(404);
          setPendingData("");
        } else {
          setPendingError(true);
        }
      });

  const handleApproveInvoice = (id) =>
    axios({
      method: "patch",
      url: `http://localhost:5000/api/approveinvoice`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
      data: {
        invoiceId: id,
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

  useEffect(() => {
    getApprovedInvoices();
    getPendingInvoices();
  }, [loading]);

  useEffect(() => {
    getApprovedInvoices();
  }, [page]);

  useEffect(() => {
    getPendingInvoices();
  }, [page2]);

  function getMonthAndYearFromDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  }

  // console.log(approvedData);

  return (
    <div className="contractor-invoices">
      <div className="invoice-table">
        <Typography id="invoice-head" variant="h6">
          Pending Invoices
        </Typography>
        {pendingData ? (
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Sr. No</StyledTableCell>
                    <StyledTableCell align="right">Client Name</StyledTableCell>
                    <StyledTableCell align="right">
                      Invoice Date
                    </StyledTableCell>
                    <StyledTableCell align="right">Amount</StyledTableCell>
                    <StyledTableCell align="center">
                      View Screenshot
                    </StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pendingData.ApprovedInvoice.map((row, index) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="right" component="th" scope="row">
                        {row.clientId.clientName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {getMonthAndYearFromDate(row.InvoiceMonth)}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.amount}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        id="eye"
                        onClick={() => {
                          setImageLink(row.ApprovalScreenshot);
                          handleClickOpen();
                        }}
                      >
                        <BsFillEyeFill />
                      </StyledTableCell>
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleApproveInvoice(row._id);
                        }}
                      >
                        Approve
                      </Button>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Paginations totalPages={pendingData.totalPage} page2={true} />
          </div>
        ) : (
          <Loading query="pending invoice" error={pendingError} />
        )}
      </div>

      <div className="approved-invoice">
        <Typography id="invoice-head" variant="h6">
          Approved Invoices
        </Typography>
        {approvedData ? (
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Sr. No</StyledTableCell>
                    <StyledTableCell align="right">Client Name</StyledTableCell>
                    <StyledTableCell align="right">
                      Invoice Date
                    </StyledTableCell>
                    <StyledTableCell align="right">Amount</StyledTableCell>
                    <StyledTableCell align="center">
                      View Screenshot
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      View Invoice
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {approvedData.ApprovedInvoice.map((row, index) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="right" component="th" scope="row">
                        {row.clientId.clientName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {getMonthAndYearFromDate(row.InvoiceMonth)}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.amount}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        id="eye"
                        onClick={() => {
                          setImageLink(row.ApprovalScreenshot);
                          handleClickOpen();
                        }}
                      >
                        <BsFillEyeFill />
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button variant="outlined" onClick={handleClickOpen3}>
                          View Invoice
                        </Button>
                      </StyledTableCell>
                      <Dialog fullScreen open={open3} onClose={handleClose3}>
                        <ViewInvoiceContractor
                          invoiceId={row._id}
                          usertoken={usertoken}
                          handleClose={handleClose3}
                        />
                      </Dialog>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Paginations totalPages={approvedData.totalPage} />
          </div>
        ) : (
          <Loading query="approved invoice" error={approvedError} />
        )}
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              ScreenShot
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Cancel
            </Button>
          </Toolbar>
        </AppBar>
        <img src={`http://localhost:5000${imgLink.split("public")[1]}`} />
      </Dialog>
    </div>
  );
};

export default ContractorInvoices;
