/* eslint-disable react/prop-types */
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import "./Cards.css";
// import { HiOutlinePencilSquare } from "react-icons/hi2";
import EditIcon from "@mui/icons-material/Edit";

const Cards = ({ ContractorDataById }) => {

  // const { _id, first_name, last_name, email, password, profileId } = ContractorDataById
  // // // eslint-disable-next-line react/prop-types
  // const { ActualAadharNo, ActualName, ActualPanNo, Address, BankAccNo, BankName, BeneficiaryAadharNo, BeneficiaryName, BeneficiaryPanNo, Birthday, ContractName, EmergencyContactName, EmergencyContactNumber, EmergencyContactRelation, Gender, IFSCcode, IsApproved, IsDecline, JoinDate, Nationality, Religion, ReportTo } = profileId


  
  function createData(name, calories) { return { name, calories }; }
  const PersonalInfo = [
    createData('Personal Information', null),
    createData('Birthday', ContractorDataById?.profileId?.Birthday),
    createData('ActualAadharNo', ContractorDataById?.profileId?.ActualAadharNo),
    createData('ActualName', ContractorDataById?.profileId?.ActualName),
    createData('ActualPanNo', ContractorDataById?.profileId?.ActualPanNo),
    createData('Address', ContractorDataById?.profileId?.Address),
    createData('ContractName', ContractorDataById?.profileId?.ContractName),
    createData('EmergencyContactName', ContractorDataById?.profileId?.EmergencyContactName),
    createData('EmergencyContactRelation', ContractorDataById?.profileId?.EmergencyContactRelation),
    createData('Gender', ContractorDataById?.profileId?.Gender),
    createData('JoinDate', ContractorDataById?.profileId?.JoinDate),
    createData('Nationality', ContractorDataById?.profileId?.Nationality),
    createData('Religion', ContractorDataById?.profileId?.Religion),
    createData('ReportTo', ContractorDataById?.profileId?.ReportTo),
    createData('EmergencyContactNumber', ContractorDataById?.profileId?.EmergencyContactNumber)
  ];

  const Beneficiary = [
    createData('Beneficiary Information', null),
    createData('BeneficiaryName', ContractorDataById?.profileId?.ActualAadharNo),
    createData('BeneficiaryAadharNo', ContractorDataById?.profileId?.BeneficiaryAadharNo),
    createData('BeneficiaryPanNo', ContractorDataById?.profileId?.BeneficiaryPanNo)
  ];

  const Bank = [
    createData('Bank Information', null),
    createData('BankName', ContractorDataById?.profileId?.BankName),
    createData('IFSCcode', ContractorDataById?.profileId?.IFSCcode),
    createData('BankAccNo', ContractorDataById?.profileId?.BankAccNo),
  ];

  
  return (
    <>

      <Box sx={{ display: 'flex', marginTop: '30px', justifyContent: 'center', flexDirection: { xs: 'column', lg: 'row' } }}>
        <Box>
          <TableContainer component={Paper} sx={{ width: '400px', border: '1px solid gray', borderRadius: '10px', marginRight: '20px' }} >
            <Table aria-label="simple table">
              <TableBody>
                {PersonalInfo.map((row) => (<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ fontSize: '15px', fontWeight: '700', paddingLeft: '9%' }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: '15px', fontWeight: '700', paddingRight: '9%' }}>{row.calories}</TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <TableContainer component={Paper} sx={{ width: '400px', border: '1px solid gray', borderRadius: '10px', marginTop: { xs: '30px', lg: '0px' }, marginRight: '20px' }} >
            <Table aria-label="simple table">
              <TableBody>
                {Beneficiary.map((row) => (<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ fontSize: '15px', fontWeight: '700', paddingLeft: '9%' }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: '15px', fontWeight: '700', paddingRight: '9%' }}>{row.calories}</TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <TableContainer component={Paper} sx={{ width: '400px', border: '1px solid gray', borderRadius: '10px', marginTop: { xs: '30px', lg: '0px' } }} >
            <Table aria-label="simple table">
              <TableBody>
                {Bank.map((row) => (<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ fontSize: '15px', fontWeight: '700', paddingLeft: '9%' }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: '15px', fontWeight: '700', paddingRight: '9%' }}>{row.calories}</TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Cards;
