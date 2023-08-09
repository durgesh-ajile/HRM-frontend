/* eslint-disable react/prop-types */
import "./Cards.css";
// import { HiOutlinePencilSquare } from "react-icons/hi2";
import EditIcon from "@mui/icons-material/Edit";

const Cards = ({ ContractorDataById }) => {

  // const { _id, first_name, last_name, email, password, profileId } = ContractorDataById
  // // eslint-disable-next-line react/prop-types
  // const { ActualAadharNo, ActualName, ActualPanNo, Address, BankAccNo, BankName, BeneficiaryAadharNo, BeneficiaryName, BeneficiaryPanNo, Birthday, ContractName, EmergencyContactName, EmergencyContactNumber, EmergencyContactRelation, Gender, IFSCcode, IsApproved, IsDecline, JoinDate, Nationality, Religion, ReportTo } = profileId

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
            <p><span><b>ActualAadharNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.ActualAadharNo}</span></p>
            <p><span><b>ActualName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.ActualName}</span></p>
            <p><span><b>ActualPanNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.ActualPanNo}</span></p>
            <p><span><b>Address</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.Address}</span></p>
            <p><span><b>BankAccNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.BankAccNo}</span></p>
            <p><span><b>BankName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.BankName}</span></p>
            <p><span><b>BeneficiaryAadharNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.BeneficiaryAadharNo}</span></p>
            <p><span><b>BeneficiaryName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.BeneficiaryName}</span></p>
            <p><span><b>BeneficiaryPanNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.BeneficiaryPanNo}</span></p>
            <p><span><b>Birthday</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.Birthday}</span></p>
            <p><span><b>ContractName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.ContractName}</span></p>
            <p><span><b>EmergencyContactName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.EmergencyContactName}</span></p>
            <p><span><b>EmergencyContactRelation</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.EmergencyContactRelation}</span></p>
            <p><span><b>Gender</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.Gender}</span></p>
            <p><span><b>IFSCcode</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.IFSCcode}</span></p>
            <p><span><b>JoinDate</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.JoinDate}</span></p>
            <p><span><b>Nationality</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.Nationality}</span></p>
            <p><span><b>Religion</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.Religion}</span></p>
            <p><span><b>ReportTo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.ReportTo}</span></p>
            <p><span><b>EmergencyContactNumber</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.EmergencyContactNumber}</span></p>
          </div>

          <div className="card card-2">
            <span className="outs" style={{ height: "39px", width: "39px", backgroundColor: "lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginRight: "10px" }} >
              <EditIcon color="disabled" />
            </span>
            <h5 className="card-title">Emergency Contact</h5>
            <p><span><b>ActualAadharNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.ActualAadharNo}</span></p>
            <p><span><b>ActualName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.ActualName}</span></p>
            <p><span><b>ActualPanNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.ActualPanNo}</span></p>
            <p><span><b>Address</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.Address}</span></p>
            <p><span><b>BankAccNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.BankAccNo}</span></p>
            <p><span><b>BankName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.BankName}</span></p>
            <p><span><b>BeneficiaryAadharNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.BeneficiaryAadharNo}</span></p>
            <p><span><b>BeneficiaryName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.BeneficiaryName}</span></p>
            <p><span><b>BeneficiaryPanNo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "118px" }}>{ContractorDataById?.profileId?.BeneficiaryPanNo}</span></p>
            <p><span><b>Birthday</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.Birthday}</span></p>
            <p><span><b>ContractName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.ContractName}</span></p>
            <p><span><b>EmergencyContactName</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.EmergencyContactName}</span></p>
            <p><span><b>EmergencyContactRelation</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.EmergencyContactRelation}</span></p>
            <p><span><b>Gender</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.Gender}</span></p>
            <p><span><b>IFSCcode</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.IFSCcode}</span></p>
            <p><span><b>JoinDate</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.JoinDate}</span></p>
            <p><span><b>Nationality</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.Nationality}</span></p>
            <p><span><b>Religion</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.Religion}</span></p>
            <p><span><b>ReportTo</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.ReportTo}</span></p>
            <p><span><b>EmergencyContactNumber</b></span><span className="valuep" style={{ textAlign: "right", marginLeft: "84px" }}>{ContractorDataById?.profileId?.EmergencyContactNumber}</span></p>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
