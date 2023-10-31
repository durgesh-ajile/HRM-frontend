import { Route, Routes } from "react-router-dom";
// import ReactBigCalendar from "./src/Pages/Calenders/Calender";
import Profile from "./src/Component/profile/Profile";
import ResponsiveDrawer from "./src/Component/Sidebar/Sidebar";
// import ContractorForm from "./src/Pages/ContractorForm/ContractorForm";
import AdminContractorTab from "./src/Pages/AdminContractorTab/AdminContractorTab";
import Organizations from "./src/Pages/Organizations.js/Organizations";
import SingleOrg from "./src/Pages/SingleOrganization.jsx/SingleOrg";
import PoDetail from "./src/Pages/PoDetails/PoDetail";
import Invoices from "./src/Pages/Invoices/Invoices";
import ContractorInvoices from "./src/Pages/ContractorInvoices/ContractorInvoices";
import OurOrganization from "./src/Pages/OurOrganization/OurOrganization";
import  socket  from './src/Socket.jsx';

const Landing = () => {
  return (
    <div className="landing">
      <ResponsiveDrawer />
      <div className="right-container">
        <Routes>
          <Route path="/" element={<AdminContractorTab />} />
          <Route path="/profile/:contractorId" element={<Profile />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/organization/:id" element={<SingleOrg />} />
          <Route path="/organization/:id/:poid" element={<PoDetail />} />
          <Route path="/organization/:id/invoices/:poid" element={<Invoices />} />
          <Route path="/invoices/:invoiceid" element={<ContractorInvoices />} />
          <Route path="/ourorganizations" element={<OurOrganization />} />
        </Routes>
      </div>
    </div>
  );
};

export default Landing;
