import { Route, Routes } from "react-router-dom";
// import ReactBigCalendar from "./src/Pages/Calenders/Calender";
import Profile from "./src/Component/profile/Profile";
import ResponsiveDrawer from "./src/Component/Sidebar/Sidebar";
// import ContractorForm from "./src/Pages/ContractorForm/ContractorForm";
import AdminContractorTab from "./src/Pages/AdminContractorTab/AdminContractorTab";

const Landing = () => {
  return (
    <div className="landing">
      <ResponsiveDrawer />
      <div className="right-container">
        <Routes>
          <Route path="/" element={<AdminContractorTab />} />
          <Route path="/profile/:contractorId" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Landing;
