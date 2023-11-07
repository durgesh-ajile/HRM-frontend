import React, { useState } from "react";
import { Box, Button, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { showToast } from "../../redux/errorSlice/errorSlice";
import { useDispatch } from "react-redux";


const OrganizationTable = ({tableData, setLoading, profileId, loading}) => {
    const [open, setOpen] = useState(false);

    const [deleteOrgId, setDeleteOrgId] = useState('')
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const dispatch = useDispatch();

      const handleClose = () => {
        setOpen(false);
      };
      const { usertoken } = JSON.parse(localStorage.getItem("token"));

    const handleDeleteOrg = () =>
    axios({
      method: "delete",
      url: `http://localhost:5000/api/deleteorganization?contractorId=${profileId}&clientId=${deleteOrgId}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      }
    })
      .then((res) => {
        setLoading(!loading)
        dispatch(showToast({ type: "success", message: res.data.message}));
      })
      .catch((err) => {
        console.log(err);
        dispatch(showToast({ type: "error", message: err.response.data.message}));
      });

  return ( tableData.length !== 0 ?
    <div style={{marginBottom:"100px"}}>
      <Box sx={{ width: { sx: "100%", lg: "96.9%", margin: "20px" } }}>
        <TableContainer
          component={Paper}
          sx={{ width: "100%", borderRadius: "10px", marginRight: "20px" }}
        >
          <Table aria-label="simple table">
          <TableHead id="all-orgzn-head">
              <TableRow>
              <TableCell align="center">Sr No.</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Working Days</TableCell>
                <TableCell align="center">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                    align="center"
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                    align="center"
                  >
                    {row.id.clientName}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "15px",
                      fontWeight: "700"
                    }}
                  >
                    {row.amount}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "15px",
                      fontWeight: "700"
                    }}
                  >
                    {row.businessDays}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                    setDeleteOrgId(row.id._id);
                      handleClickOpen();
                    }}
                  >
                    <AiFillDelete />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Delete contractor"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to remove this organization from this
                    contractor?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    onClick={() => {
                      handleDeleteOrg();
                      handleClose();
                    }}
                    autoFocus
                  >
                    Remove
                  </Button>
                </DialogActions>
              </Dialog>
          </Table>
        </TableContainer>
      </Box>
    </div> : <Box
          sx={{
            width: "100%",
            // height: "91vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pb:"50px"
          }}
        >
          <Box>
            <Typography variant="h5">
              No organization assigned yet...
            </Typography>
          </Box>
        </Box>
  );
};

export default OrganizationTable;
