import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Loading from "../../Component/common/Loading";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import "./Invoice.css";
import CreateInvoice from "./CreateInvoice";
import ViewInvoice from "./ViewInvoices";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const Invoices = () => {
  const [poData, setPoData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allInvoices, setAllInvoices] = useState('');

  const { poid } = useParams();
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

  const getInvoiceDataForRestriction = () => {
    axios({
      method: "get",
      url: `https://braided-complex-403612.el.r.appspot.com/api/getinvoicedata?poId=${poid}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setAllInvoices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  React.useEffect(() => {
    getSinglePo();
    getInvoiceDataForRestriction()
  }, [loading]);

  return poData ? (
    <div>
      <h3>Invoices</h3>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">Serial No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center"></TableCell>

              {/* <TableCell align="center">Remove</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {poData.Contractors.map((row, index) => (
              <Row
                key={row._id}
                row={row}
                index={index}
                poid={poid}
                usertoken={usertoken}
                allInvoices={allInvoices}
                validTill={poData.ValidTill}
                parentLoading={loading}
                setParentLoading={setLoading}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ) : (
    <Loading error={error} />
  );
};

function Row(props) {
  const { row, index, poid, usertoken, allInvoices, validTill, parentLoading, setParentLoading } = props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = React.useState(false);

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const getInvoiceData = () => {
    axios({
      method: "get",
      url: `https://braided-complex-403612.el.r.appspot.com/api/getinvoiceofcontractor?poId=${poid}&contractorId=${row.id._id}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  React.useEffect(()=>{
    setParentLoading(!parentLoading)
    getInvoiceData();
  }, [loading])


  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {index + 1}.
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {row.id.first_name} {row.id.last_name}
        </TableCell>
        <TableCell align="center">{row.id.email}</TableCell>
        <TableCell align="center">
          <Button
            onClick={() => {
              handleClickOpen2();
            }}
          >
            Create Invoice
          </Button>
          <Dialog open={open2} onClose={handleClose2}>
            <CreateInvoice
              poid={poid}
              contractorId={row.id._id}
              usertoken={usertoken}
              handleClose={handleClose2}
              row={row}
              loading={loading}
              setLoading={setLoading}
              allInvoices={allInvoices}
              validTill={validTill}
              setOpen4={setOpen4}
            />
          </Dialog>
        </TableCell>
        {/* <TableCell align="center"></TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Invoices
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Invoice ID</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data ? (
                    data.invoices.map((inrow) => (
                      <TableRow key={inrow._id}>
                        <TableCell align="center" component="th" scope="row">
                          {inrow.Name}
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                          {inrow.Amount}
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                          {inrow.InvoiceNumber}
                        </TableCell>
                        <TableCell align="center">
                          <Button onClick={handleClickOpen3}>
                            View Invoice
                          </Button>
                        </TableCell>
                        <Dialog fullScreen open={open3} onClose={handleClose3}>
                          <ViewInvoice
                            invoiceId={inrow._id}
                            usertoken={usertoken}
                            handleClose={handleClose3}
                          />
                        </Dialog>
                      </TableRow>
                    ))
                  ) : error === true ? (
                    <Alert severity="error" style={{ paddingLeft: "60px" }}>
                      <AlertTitle>Error</AlertTitle>
                      <strong>Oop! something went wrong - </strong>
                      <br /> Please try again later
                    </Alert>
                  ) : error === 404 ? (
                    <div className="not-present">No invoice present</div>
                  ) : (
                    <Box id="progress-box-invoice">
                      <CircularProgress />
                    </Box>
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <Dialog
        open={open4}
        onClose={handleClose4}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"PO amount reached."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           New invoice cannot be created because doing this cross the total amount in invoices to the total PO amount given
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose4} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Invoices;
