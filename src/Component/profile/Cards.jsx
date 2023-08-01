import "./Cards.css";
// import { HiOutlinePencilSquare } from "react-icons/hi2";
import EditIcon from "@mui/icons-material/Edit";

const Cards = () => {
  return (
    <>
      <div className="conatiner">
        <div className="row">
          <div className="card card-1">
            {/* <HiOutlinePencilSquare className="out" /> */}
            {/* <span
              className="out"
              style={{
                height: "39px",
                width: "39px",
                backgroundColor: "lightgray",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                marginRight: "10px",
              }}
            >
              <EditIcon color="disabled" />
            </span> */}
            <h5 className="card-title">Personal Information</h5>
            <div className="card-11 d-flex" style={{ }}>
              <div className="card-box">
                <p>
                  <span>
                    <b>Passport No.</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Passport Exp No.</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Tel</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Nationality</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Religion</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Marital status</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Employment of Spouse</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>No. of chlidren</b>
                  </span>
                </p>
              </div>
              <div
                className="card-box"
                style={{ color: "grey", fontSize: "1rem" }}
              >
                <p>
                  <span>
                    <b>9876543210</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>9876543210</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>9876543210</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Indian</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Christian</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Married</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>No</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>2</b>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="card card-2">
            {/* <span
              className="outs"
              style={{
                height: "39px",
                width: "39px",
                backgroundColor: "lightgray",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                marginRight: "10px",
              }}
            >
              <EditIcon color="disabled" />
            </span> */}
            <h5 className="card-title">Emergency Contact</h5>
            <div className="card-bx d-flex" style={{ }}>
              <div className="card-box">
                <p>
                  <span>
                    <b>Primary</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Name</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Relationship</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Phone</b>
                  </span>
                </p>
              </div>
              <div className="card-box" style={{ color: "grey" }}>
                <p>
                  <span>
                    <b>----</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>John Doe</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Father</b>
                  </span>
                </p>
                <p>
                  <span id="numbr-cr-1">
                    <b>9876543210,9876543210</b>
                  </span>
                </p>
              </div>
            </div>
            <hr />
            <div className="card-bx d-flex" style={{ }}>
              <div className="card-box" style={{ fontSize: "1rem" }}>
                <p>
                  <span>
                    <b>Secondary</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Name</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Relationship</b>
                  </span>{" "}
                </p>
                <p>
                  <span>
                    <b>Phone</b>
                  </span>
                </p>
              </div>
              <div className="card-box" style={{ color: "grey" }}>
                <p>
                  <span>
                    <b>---</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Karen Wills</b>
                  </span>
                </p>
                <p>
                  <span>
                    <b>Brother</b>
                  </span>
                </p>
                <p>
                  <span id="numbr-cr-1">
                    <b>9876543210,9876543210</b>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
