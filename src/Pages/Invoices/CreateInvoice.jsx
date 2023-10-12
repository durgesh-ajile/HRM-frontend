import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, DialogActions, DialogTitle, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const commonStyles = {
  bgcolor: "background.paper",
  ml: 1,
  mt: 1,
  border: 1,
  width: "100%",
  height: "1.7rem",
};

const CreateInvoice = ({ poid, contractorId, usertoken, handleClose, row }) => {
  const {id} = useParams()
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gst, setGst] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [deductedAmount, setdeductedAmount] = useState(0);

  function generateRandomNumberUsingTime() {
    // Get the current date and time
    const now = new Date();

    // Extract the hour, minute, and second components
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Use the hour, minute, and second as seeds to generate a random number
    const randomSeed = hour * 3600 + minute * 60 + second;

    // Generate a random number between 0 and 999
    const randomNum = Math.floor(Math.random() * 1000);

    // Combine the random number and the time-based seed
    const finalRandom = `${randomNum}${randomSeed}`;

    return parseInt(finalRandom, 10);
  }

  const createInvoiceofpo = () => {
    axios({
      method: "post",
      url: `http://localhost:5000/api/createInvoiceofpo`,
      data: {
        poId: poid,
        contractorId: contractorId,
        name: name,
        address: address,
        gstInUiIn: gst,
        invoiceNumber: invoiceNumber,
        amount: deductedAmount,
      },
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetTask = () => {
    let formatDate = convertMonth(month, year);
    axios({
      method: "get",
      url: `http://localhost:5000/api/gettaskforadmin?date=${formatDate}&organization=${id}&contractorId=${contractorId}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        setdeductedAmount(getDeductedAmount(res.data.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (month && year) {
      handleGetTask();
    } else{
      setdeductedAmount(0)
    }
  }, [month, year]);

  useEffect(() => {
    setInvoiceNumber(generateRandomNumberUsingTime());
  }, []);

  useEffect(() => {
    setName(row.id.first_name + ' ' + row.id.last_name)
    setAddress(row.id.profileId.Address)
  }, []);

  const convertMonth = () => {
    // Convert selectedMonth to a two-digit string
    const selectedMonth = month.padStart(2, "0");

    // Format the result as "MM/YYYY"
    const formattedDate = `${selectedMonth}/${year}`;

    return formattedDate;
  };

  const getDeductedAmount = (arr) => {
    if (arr) {
      let amount = (arr.length * row.amount) / 22;
      amount = Math.floor(amount);
      return amount;
    }
  };

  console.log(row);
  console.log(usertoken);


  return (
    <div className="create-invoice">
      <DialogTitle id="create-invoice-title">Create Invoice</DialogTitle>
      <Box>
        <Box id="create-invoice-box">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="filled"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </Box>
        <Box id="create-invoice-box">
          <TextField
            id="outlined-basic"
            label="Address"
            variant="filled"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
        </Box>
        <Box id="create-invoice-box">
          <TextField
            id="outlined-basic"
            label="GST"
            variant="filled"
            onChange={(e) => {
              setGst(e.target.value);
            }}
          />
        </Box>
        <div id="period-div">
          <Typography variant="h6">Select Period:</Typography>
          <select
            className="custom-select"
            id="select-month"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          >
            <option selected value="">
              Select Month
            </option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
            className="custom-select"
          >
            <option selected value="">
              Select Year
            </option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
          </select>
        </div>
        <Box id="create-invoice-box">
          <TextField
            id="outlined-basic"
            label="HR entered amount"
            variant="filled"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </Box>
        <Box id="create-invoice-box">
          <TextField
            id="outlined-basic"
            label="Timesheet calculated amount"
            variant="filled"
            value={deductedAmount}
            // onChange={(e) => {
            //   setAmount(e.target.value);
            // }}
          />
        </Box>
        <Box id="create-invoice-box">
          <TextField
            id="outlined-basic"
            label="Invoice no."
            value={invoiceNumber}
            variant="filled"
            onChange={(e) => {
              // setName(e.target.value)
            }}
          />
        </Box>
      </Box>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            handleClose();
            createInvoiceofpo();
          }}
        >
          Create
        </Button>
      </DialogActions>
    </div>
  );
};

export default CreateInvoice;
