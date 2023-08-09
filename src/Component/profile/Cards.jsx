import "./Cards.css";
// import { HiOutlinePencilSquare } from "react-icons/hi2";
import EditIcon from "@mui/icons-material/Edit";

const Cards = ({ ContractorDataById }) => {

  const { _id, first_name, last_name, email, password, profileId } = ContractorDataById
  // eslint-disable-next-line react/prop-types
  const { ActualAadharNo, ActualName, ActualPanNo, Address, BankAccNo, BankName, BeneficiaryAadharNo, BeneficiaryName, BeneficiaryPanNo, Birthday, ContractName, EmergencyContactName, EmergencyContactNumber, EmergencyContactRelation, Gender, IFSCcode, IsApproved, IsDecline, JoinDate, Nationality, Religion, ReportTo } = profileId

  return (
    <>
      <div className="conatiner">
        <div className="row">
          <div className="card card-1">
            {/* <HiOutlinePencilSquare className="out" /> */}
            <span className="out" style={{ height: "39px", width: "39px", backgroundColor: "lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginRight: "10px" }} >
              <EditIcon color="disabled" />
            </span>
            <h5 className="card-title">Personal Information</h5>
            <p><span><b>ActualAadharNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ActualAadharNo}</span></p>
            <p><span><b>ActualName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ActualName}</span></p>
            <p><span><b>ActualPanNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ActualPanNo}</span></p>
            <p><span><b>Address</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{Address}</span></p>
            <p><span><b>BankAccNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{BankAccNo}</span></p>
            <p><span><b>BankName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{BankName}</span></p>
            <p><span><b>BeneficiaryAadharNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{BeneficiaryAadharNo}</span></p>
            <p><span><b>BeneficiaryName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{BeneficiaryName}</span></p>
            <p><span><b>BeneficiaryPanNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{BeneficiaryPanNo}</span></p>
            <p><span><b>Birthday</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{Birthday}</span></p>
            <p><span><b>ContractName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractName}</span></p>
            <p><span><b>EmergencyContactName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{EmergencyContactName}</span></p>
            <p><span><b>EmergencyContactRelation</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{EmergencyContactRelation}</span></p>
            <p><span><b>Gender</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{Gender}</span></p>
            <p><span><b>IFSCcode</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{IFSCcode}</span></p>
            <p><span><b>JoinDate</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{JoinDate}</span></p>
            <p><span><b>Nationality</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{Nationality}</span></p>
            <p><span><b>Religion</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{Religion}</span></p>
            <p><span><b>ReportTo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ReportTo}</span></p>
            <p><span><b>EmergencyContactNumber</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{EmergencyContactNumber}</span></p>
          </div>

          <div className="card card-2">
            <span className="outs" style={{ height: "39px", width: "39px", backgroundColor: "lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginRight: "10px" }} >
              <EditIcon color="disabled" />
            </span>
            <h5 className="card-title">Emergency Contact</h5>
            <p><span><b>ActualAadharNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ActualAadharNo}</span></p>
            <p><span><b>ActualName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ActualName}</span></p>
            <p><span><b>ActualPanNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ActualPanNo}</span></p>
            <p><span><b>Address</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{Address}</span></p>
            <p><span><b>BankAccNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{BankAccNo}</span></p>
            <p><span><b>BankName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{BankName}</span></p>
            <p><span><b>BeneficiaryAadharNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{BeneficiaryAadharNo}</span></p>
            <p><span><b>BeneficiaryName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{BeneficiaryName}</span></p>
            <p><span><b>BeneficiaryPanNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{BeneficiaryPanNo}</span></p>
            <p><span><b>Birthday</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{Birthday}</span></p>
            <p><span><b>ContractName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractName}</span></p>
            <p><span><b>EmergencyContactName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{EmergencyContactName}</span></p>
            <p><span><b>EmergencyContactRelation</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{EmergencyContactRelation}</span></p>
            <p><span><b>Gender</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{Gender}</span></p>
            <p><span><b>IFSCcode</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{IFSCcode}</span></p>
            <p><span><b>JoinDate</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{JoinDate}</span></p>
            <p><span><b>Nationality</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{Nationality}</span></p>
            <p><span><b>Religion</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{Religion}</span></p>
            <p><span><b>ReportTo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ReportTo}</span></p>
            <p><span><b>EmergencyContactNumber</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{EmergencyContactNumber}</span></p>
            
          </div>
        </div>
      </div>
    </>
  );


  
};

export default Cards;
