import "./Cards.css";
// import { HiOutlinePencilSquare } from "react-icons/hi2";
import EditIcon from '@mui/icons-material/Edit';


const Cards = () => {
  return (
    <>
      <div className="conatiner">
        <div className="row">
            <div className="card card-1">
              {/* <HiOutlinePencilSquare className="out" /> */}
              <span className="out" style={{height:"39px",width:"39px", backgroundColor:"lightgray",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px",marginRight:"10px"}} >
          <EditIcon color="disabled" />
        </span>
              <h5 className="card-title">Personal Information</h5>
              <p>
                <span>
                  <b>Passport No.</b>
                </span>{" "}
                <span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>
                  {" "}
                  9876543210
                </span>
              </p>
              <p>
                <span>
                  <b>Passport Exp No.</b>
                </span>
                <span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>
                  {" "}
                  9876543210{" "}
                </span>
              </p>
              <p>
                <span>
                  <b>Tel</b>{" "}
                </span>{" "}
                <span className="valuep" 
                  style={{
                    textAlign: "right",
                    marginLeft: "195px",
                    color: "blue",
                  }}
                >
                  {" "}
                  9876543210{" "}
                </span>
              </p>
              <p>
                <span>
                  <b>Nationality</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "136px" }}>
                  {" "}
                  Indian{" "}
                </span>
              </p>
              <p>
                <span>
                  <b>Religion</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "153px" }}>
                  {" "}
                  Christian{" "}
                </span>
              </p>
              <p>
                <span>
                  <b>Marital status</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "114px" }}>
                  {" "}
                  Married{" "}
                </span>
              </p>
              <p>
                <span>
                  <b>Employment of Spouse</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "40px" }}>
                  {" "}
                  No{" "}
                </span>
              </p>
              <p>
                <span>
                  <b>No. of chlidren</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "107px" }}>
                  {" "}
                  2{" "}
                </span>
              </p>
          </div>
            <div className="card card-2">
              {/* <HiOutlinePencilSquare className="outs" /> */}
              <span className="outs" style={{height:"39px",width:"39px", backgroundColor:"lightgray",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px",marginRight:"10px"}} >
          <EditIcon color="disabled" />
        </span>
              <h5 className="card-title">Emergency Contact</h5>
              <p>
                <span>
                  <b>Primary</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "110px" }}>
                  {" "}
                </span>
              </p>
              <p>
                <span>
                  <b>Name</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "110px" }}>
                  John Doe{" "}
                </span>
              </p>
              <p>
                <span>
                  <b>Relationship</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "60px" }}>
                  {" "}
                  Father
                </span>
              </p>
              <p>
                <span>
                  <b>Phone</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "105px" }}>
                  9876543210, 9876543210{" "}
                </span>
              </p>
              <hr />
              <p>
                <span>
                  <b>Secondary</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "110px" }}>
                  {" "}
                </span>
              </p>
              <p>
                <span>
                  <b>Name</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "110px" }}>
                  Karen Wills{" "}
                </span>
              </p>
              <p>
                <span>
                  <b>Relationship</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "60px" }}>
                  Brother{" "}
                </span>
              </p>
              <p>
                <span>
                  <b>Phone</b>{" "}
                </span>{" "}
                <span className="valuep"  style={{ textAlign: "right", marginLeft: "105px" }}>
                  9876543210, 9876543210{" "}
                </span>
              </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
