import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, DialogActions, DialogTitle } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import Loading from "../../Component/common/Loading";

const commonStyles = {
  bgcolor: "background.paper",
  ml: 1,
  mt: 1,
  border: 1,
  width: "100%",
  height: "1.7rem",
};

function getMonthAndYearFromDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

const ViewInvoiceContractor = ({ invoiceId, usertoken, handleClose }) => {
  const targetRef = useRef();
  const [invoiceData, setInvoiceData] = useState("");
  const [error, setError] = useState(false);

  const getInvoiceofContractor = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/api/getsingleapprovedinvoiceadmin?invoiceId=${invoiceId}`,
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
      .then((res) => {
        console.log(res);
        setInvoiceData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    getInvoiceofContractor();
  }, []);


  return invoiceData ? (
    <div className="create-invoice">
      <DialogTitle>View Invoice</DialogTitle>
      <Box ref={targetRef}>
        <Box
          sx={{
            borderColor: "text.primary",
            border: 1,
            typography: "INVOICE/BILL OF SUPPLY",
          }}
        >
          <Box>
            <h5 id="invoice-heading">INVOICE/BILL OF SUPPLY</h5>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "60%" }}>
            <Box
              sx={{
                height: 24,
                border: 1,
                ml: 0,
                pl: 1,
              }}
            >
              <span id="label">Name:</span>
              <span id="name">
                {invoiceData.singleInvoice.contractorId.first_name}{" "}
                {invoiceData.singleInvoice.contractorId.last_name}
              </span>
            </Box>
            <Box
              sx={{
                height: 24,
                border: 1,
                pl: 1,
                ml: 0,
              }}
            >
              <span id="label">Address:</span>
              <span id="label">{invoiceData.singleInvoice.Address}</span>
            </Box>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: 48,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label-normal">Invoice Number : </span>
            <span id="label-normal">
            
            </span>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: 48,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label-normal">Dated : </span>
            <span id="label-normal">{getMonthAndYearFromDate(invoiceData.singleInvoice.InvoiceMonth)}</span>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "60%" }}>
            <Box
              sx={{
                height: 24,
                border: 1,
                ml: 0,
                pl: 1,
              }}
            >
              <span id="label"></span>
              <span id="name"></span>
            </Box>
            <Box
              sx={{
                height: 24,
                border: 1,
                pl: 1,
                ml: 0,
              }}
            >
              <span id="label">GSTIN/UIN: </span>
              <span id="label">{invoiceData.singleInvoice.GSTInUIn}</span>
            </Box>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: 48,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label-normal">Delivery Note : </span>
            <span id="label-normal"></span>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: 48,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label-normal">Mode/Terms of Payment : </span>
            <span id="label-normal"></span>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "60%" }}>
            <Box
              sx={{
                height: 24,
                border: 1,
                ml: 0,
                pl: 1,
              }}
            >
              <span id="label"></span>
              <span id="name"></span>
            </Box>
            <Box
              sx={{
                height: 24,
                border: 1,
                pl: 1,
                ml: 0,
              }}
            >
              <span id="label">Buyer (Bill to):</span>
              <span id="label"></span>
            </Box>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: 48,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label-normal">Reference No. & Date. : </span>
            <span id="label-normal"></span>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: 48,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label-normal">Other References : </span>
            <span id="label-normal"></span>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "60%" }}>
            <Box
              sx={{
                height: 24,
                border: 1,
                ml: 0,
                pl: 1,
              }}
            >
              <span id="label">Name:</span>
              <span id="name">Buyer name</span>
            </Box>
            <Box
              sx={{
                height: 24,
                border: 1,
                pl: 1,
                ml: 0,
              }}
            >
              <span id="label">Address:</span>
              <span id="label"></span>
            </Box>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: 48,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label-normal">Buyer's Order No. : </span>
            <span id="label-normal"></span>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: 48,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label-normal">Dated : </span>
            <span id="label-normal"></span>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "60%" }}>
            <Box
              sx={{
                height: 24,
                border: 1,
                ml: 0,
                pl: 1,
              }}
            >
              <span id="label"></span>
              <span id="name"></span>
            </Box>
            <Box
              sx={{
                height: 24,
                border: 1,
                pl: 1,
                ml: 0,
              }}
            >
              <span id="label">GSTIN/UIN: :</span>
              <span id="label"></span>
            </Box>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: 48,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label-normal">Dispatch Doc No. : </span>
            <span id="label-normal"></span>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: 48,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label-normal">Delivery Note Date : </span>
            <span id="label-normal"></span>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "59.4%",
              height: 144,
              border: 1,
              pl: 1,
              ml: 0,
            }}
          >
            <span id="label"></span>
            <span id="label"></span>
          </Box>
          <Box sx={{ width: "80%" }}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "50%",
                  height: 48,
                  border: 1,
                  pl: 1,
                  ml: 0,
                }}
              >
                <span id="label-normal">Dispatched through : </span>
                <span id="label-normal"></span>
              </Box>
              <Box
                sx={{
                  height: 48,
                  border: 1,
                  pl: 1,
                  ml: 0,
                  width: "50%",
                }}
              >
                <span id="label-normal">Destination : </span>
                <span id="label-normal"></span>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  // width: "40%",
                  height: 48,
                  border: 1,
                  pl: 1,
                  ml: 0,
                  width: "50%",
                }}
              >
                <span id="label-normal">Bill of Lading/LR-RR No. : </span>
                <span id="label-normal"></span>
              </Box>
              <Box
                sx={{
                  // width: "40%",
                  height: 48,
                  border: 1,
                  pl: 1,
                  ml: 0,
                  width: "50%",
                }}
              >
                <span id="label-normal">Motor Vehicle No.: </span>
                <span id="label-normal"></span>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  // width: "40%",
                  height: 48,
                  border: 1,
                  pl: 1,
                  ml: 0,
                  width: "100%",
                }}
              >
                <span id="label-normal">Terms of Delivery: </span>
                <span id="label-normal"></span>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}></Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              width: "7%",
              border: 1,
              ml: 0,
              p: 1,
              textAlign: "center",
            }}
          >
            <span id="">Sr. No.</span>
          </Box>
          <Box
            sx={{
              width: "43%",
              border: 1,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal">Description of Services</span>
          </Box>
          <Box
            sx={{
              width: "20%",
              border: 1,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal">Rate per unit/hour</span>
          </Box>
          <Box
            sx={{
              width: "20%",
              border: 1,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal">Other charges</span>
          </Box>
          <Box
            sx={{
              width: "20%",
              border: 1,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal">Total Amount</span>
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              width: "7%",
              border: 1,
              height: 350,
              ml: 0,
              p: 1,
              textAlign: "center",
            }}
          >
            <span id="">1</span>
          </Box>
          <Box
            sx={{
              width: "43%",
              border: 1,
              height: 350,
              p: 1,
              ml: 0,
            }}
          >
            <span id="">Description:</span>
          </Box>
          <Box
            sx={{
              width: "20%",
              border: 1,
              height: 350,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal"></span>
          </Box>
          <Box
            sx={{
              width: "20%",
              border: 1,
              height: 350,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal"></span>
          </Box>
          <Box
            sx={{
              width: "20%",
              border: 1,
              height: 350,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal">{invoiceData.singleInvoice.amount}</span>
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              width: "7%",
              border: 1,
              ml: 0,
              p: 1,
              textAlign: "center",
            }}
          >
            <span id=""></span>
          </Box>
          <Box
            sx={{
              width: "43%",
              border: 1,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal">Total</span>
          </Box>
          <Box
            sx={{
              width: "20%",
              border: 1,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal"></span>
          </Box>
          <Box
            sx={{
              width: "20%",
              border: 1,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal"></span>
          </Box>
          <Box
            sx={{
              width: "20%",
              border: 1,
              p: 1,
              ml: 0,
              textAlign: "center",
            }}
          >
            <span id="label-normal"></span>
          </Box>
        </Box>
        {/* <Box sx={{ display: "flex", width:"100%" }}>
          <Box>
            <Box
              sx={{
                width: 70,
                height: 48,
                border: 1,
                ml: 0,
                p: 1,
                textAlign: "center",
              }}
            >
              <span id="">Sr. No.</span>
            </Box>
            <Box
              sx={{
                width: 70,
                height: 300,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="">1</span>
            </Box>
            <Box
              sx={{
                width: 70,
                height: 48,
                border: 1,
                ml: 0,
                p: 1,
                textAlign: "center",
              }}
            >
              <span id=""></span>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                width: 550,
                height: 48,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal">Description of Services</span>
            </Box>
            <Box
              sx={{
                width: 550,
                height: 300,
                border: 1,
                p: 1,
                ml: 0,
              }}
            >
              <span id="label-normal">Description:</span>
              <span id="label-normal"></span>
            </Box>
            <Box
              sx={{
                width: 550,
                height: 48,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal">Total</span>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                width: 230,
                height: 48,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal">Rate per unit/hour</span>
            </Box>
            <Box
              sx={{
                width: 230,
                height: 300,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal"></span>
            </Box>
            <Box
              sx={{
                width: 230,
                height: 48,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal"></span>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                width: 230,
                height: 48,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal">Other charges</span>
            </Box>
            <Box
              sx={{
                width: 230,
                height: 300,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal"></span>
            </Box>
            <Box
              sx={{
                width: 230,
                height: 48,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal"></span>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                width: 230,
                height: 48,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal">Total Amount</span>
            </Box>
            <Box
              sx={{
                width: 230,
                height: 300,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal">{invoiceData.singleInvoice.Amount}</span>
            </Box>
            <Box
              sx={{
                width: 230,
                height: 48,
                border: 1,
                p: 1,
                ml: 0,
                textAlign: "center",
              }}
            >
              <span id="label-normal"></span>
            </Box>
          </Box>
        </Box> */}
        <Box
          sx={{
            width: "100%",
            border: 1,
            p: 1,
            ml: 0,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <span id="label-normal">Amount Chargeable (in words): </span>
              <span id="label-normal">Twenty Thousand </span>
            </div>
            <div>
              <span id="label-normal">E. & O.E</span>
            </div>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: 150,
              border: 1,
              p: 1,
              ml: 0,
            }}
          >
            <p id="label">Description:</p>
            <span id="label-normal">
              We declare that this invoice shows the actual price of the goods
              described and that all particulars are true and correct.
            </span>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: 150,
              border: 1,
              p: 1,
            }}
          >
            <p id="label">Bank Details:</p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: 100,
              border: 1,
              p: 1,
              ml: 0,
            }}
          >
            <p id="label">Customer's Seal and Signature</p>
            <p id="label-normal"></p>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: 100,
              border: 1,
              p: 1,
            }}
          >
            <p id="label">for</p>
            <p id="label-normal"></p>
            <p id="label-normal">Authority Signature</p>
          </Box>
        </Box>
      </Box>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            generatePDF(targetRef, { filename: "invoice.pdf" });
          }}
        >
          Download
        </Button>
      </DialogActions>
    </div>
  ) : (
    <Loading error={error} />
  );
};

export default ViewInvoiceContractor;
