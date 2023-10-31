import React from "react";
import "./SingleOrg.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
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
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import CircularProgress from "@mui/material/CircularProgress";
import Loading from "../../Component/common/Loading";
import Paginations from "../../Component/common/Pagination";
import { showToast } from "../../redux/errorSlice/errorSlice";
import { useDispatch } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const SingleOrg = () => {
  const { id } = useParams();
  const [allPo, setAllPo] = useState("");
  const [poNumber, setPoNumber] = useState("");
  const [poAmount, setPoAmount] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validTill, setValidTill] = useState("");
  const [issuer, setIssuer] = useState("");
  const [issuerEmail, setIssuerEmail] = useState("");
  const [description, setDescptn] = useState("");
  const [error, setError] = useState(false);
  const [poData, setPoData] = useState("");

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { usertoken } = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  let page = searchParams.get("page");


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

  const dispatch = useDispatch();

  const convertDate2 = (date) => {
    var newdate = new Date(date);
    newdate = newdate.toLocaleString();
    return newdate;
  };

  const handlePoSubmit = () =>
    axios({
      method: "post",
      url: "https://braided-complex-403612.el.r.appspot.com/api/createPo",
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
      data: {
        clientId: id,
        poNumber: poNumber,
        poAmount: poAmount,
        ValidFrom: validFrom,
        Validtill: validTill,
        POdescription: description,
        issuerName: issuer,
        issuerEmail: issuerEmail,
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

  const getAllPos = () =>
    axios({
      method: "get",
      url: `https://braided-complex-403612.el.r.appspot.com/api/getPO's?clientId=${id}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setAllPo(res.data.po);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404){
          setError(404)
        }else{
          setError(true)
        }
      });

  const getSinglePo = (poId) => {
    axios({
      method: "get",
      url: `https://braided-complex-403612.el.r.appspot.com/api/getsinglePo?poId=${poId}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setPoData(res.data.singlePO);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllPos();
  }, [loading]);

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

  // console.log(issuerEmail)

  return  (
    <div className="po">
      <div className="add-po">
        <Button
          id="add-po-btn"
          variant="contained"
          onClick={() => {
            handleClickOpen();
          }}
        >
          Add PO
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 5 }} id="customized-dialog-title">
            PO
          </DialogTitle>
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
            component="form"
            sx={{
              py: 1,
              px: 5,
              display: "grid",
              gap: 3,
              alignItems: "center",
              flexWrap: "wrap",
            }}
            width="45ch"
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              type="number"
              label="PO Number"
              variant="outlined"
              onChange={(e) => {
                setPoNumber(e.target.value);
              }}
            />
            <TextField
              id="filled-basic"
              label="PO Amount"
              variant="outlined"
              type="number"
              onChange={(e) => {
                setPoAmount(e.target.value);
              }}
            />
            <span> Valid From:- </span>
            <TextField
              id="filled-basic"
              label=""
              variant="filled"
              type="date"
              onChange={(e) => {
                setValidFrom(e.target.value);
              }}
            />
            <span>Valid Till:-</span>
            <TextField
              id="filled-basic"
              label=""
              variant="outlined"
              type="date"
              onChange={(e) => {
                setValidTill(e.target.value);
              }}
            />
            <Textarea
              name="Outlined"
              placeholder="PO Description…"
              variant="outlined"
              minRows={2}
              onChange={(e) => {
                setDescptn(e.target.value);
              }}
            />
            <TextField
              id="filled-basic"
              label="Issued by Name"
              variant="outlined"
              onChange={(e) => {
                setIssuer(e.target.value);
              }}
            />
            <TextField
              id="filled-basic"
              label="Issuer Email"
              variant="outlined"
              onChange={(e) => {
                setIssuerEmail(e.target.value);
              }}
            />
          </Box>

          <DialogActions>
            <Button
              autoFocus
              onClick={() => {
                handleClose();
                handlePoSubmit();
              }}
              variant="contained"
            >
              Submit
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      {allPo ?
      <div className="all-orgzn">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead id="all-orgzn-head">
              <TableRow>
                <TableCell>Issued by</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Expiry date</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">View Details</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allPo.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.IssuerName}
                  </TableCell>
                  <TableCell align="center">{row.POAmount}</TableCell>
                  <TableCell align="center">
                    {convertDate(row.ValidTill)}
                  </TableCell>
                  {row.IsActive ? (
                    <TableCell align="center">Active</TableCell>
                  ) : (
                    <TableCell align="center">Inactive</TableCell>
                  )}
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => {
                        getSinglePo(row._id);
                        setOpen2(true);
                      }}
                    >
                      View
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                  <Button
                      variant="contained"
                      onClick={() => {
                        navigate(`/organization/${id}/invoices/${row._id}`);
                      }}
                    >
                      Invoices
                    </Button>
                    {' '}
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigate(`/organization/${id}/${row._id}?page=1`);
                      }}
                    >
                      More Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {poData && (
              <BootstrapDialog
                onClose={handleClose2}
                aria-labelledby="customized-dialog-title"
                open={open2}
              >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                  PO Details
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose2}
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
                    width: "45ch",
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
              </BootstrapDialog>
            )}
          </Table>
        </TableContainer>
        <Paginations totalPages={allPo.totalPages} />
      </div> : <Loading error ={error} query ="PO"/>}
    </div>
  )
};

export default SingleOrg;
