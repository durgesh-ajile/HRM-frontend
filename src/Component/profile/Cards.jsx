/* eslint-disable react/prop-types */
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import "./Cards.css";
// import { HiOutlinePencilSquare } from "react-icons/hi2";
import EditIcon from "@mui/icons-material/Edit";
import { ISTdateFormater, UTCDateFormater } from "../../Utils/Functions";

const Cards = ({ ContractorDataById }) => {

  // const { _id, first_name, last_name, email, password, profileId } = ContractorDataById
  // // // eslint-disable-next-line react/prop-types
  const { ActualAadharNo, ActualName, ActualPanNo, Address, BankAccNo, BankName, BeneficiaryAadharNo, BeneficiaryName, BeneficiaryPanNo, Birthday, ContractName, EmergencyContactName, EmergencyContactNumber, EmergencyContactRelation, Gender, IFSCcode, IsApproved, IsDecline, JoinDate, Nationality, Religion, ReportTo } = ContractorDataById.profileId
console.log(ContractorDataById)

  
  function createData(name, calories) { return { name, calories }; }
  const PersonalInfo = [
    createData('Personal Information', null),
    createData('Birthday', ISTdateFormater(Birthday)),
    createData('Contract Name', ContractName),
    createData('Address', Address),
    createData('Gender', Gender),
    createData('JoinDate', UTCDateFormater(JoinDate)),
    createData('Nationality', Nationality),
    createData('Religion', Religion),
    createData('ReportTo', ReportTo),
  ];



  const EmergencyInfo = [
    createData('Emergency Information', null),
    createData('Emergency Contact Name', EmergencyContactName),
    createData('Emergency Contact Relation', EmergencyContactRelation),
    createData('Emergency Contact Number', EmergencyContactNumber),
  ];

  const ActualInfo = [
    createData('Actual Information', null),
    createData('Actual Aadhar No.', ActualAadharNo),
    createData('Actual Name', ActualName),
    createData('Actual Pan No.', ActualPanNo),
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
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', lg: 'row' } }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
          <Box sx={{ width: { sx: '100%', lg: '30%', margin: '20px' } }}>
            <TableContainer component={Paper} sx={{ width: '100%', borderRadius: '10px', marginRight: '20px' }} >
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
          <Box sx={{ width: { sx: '100%', lg: '70%' } }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
              <Box sx={{ width: '95%', margin: '20px' }}>
                <TableContainer component={Paper} sx={{ width: '100%', borderRadius: '10px', marginTop: { xs: '30px', lg: '0px' }, marginRight: '20px' }} >
                  <Table aria-label="simple table">
                    <TableBody sx={{ width: '100%' }}>
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
              <Box sx={{ width: '95%', margin: '20px' }}>
                <TableContainer component={Paper} sx={{ width: '100%', borderRadius: '10px', marginTop: { xs: '30px', lg: '0px' } }} >
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
            <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
              <Box sx={{ width: '95%', margin: '20px' }}>
                <TableContainer component={Paper} sx={{ width: '100%', borderRadius: '10px', marginTop: { xs: '30px', lg: '0px' } }} >
                  <Table aria-label="simple table">
                    <TableBody sx={{ width: '100%' }}>
                      {EmergencyInfo.map((row) => (<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
              <Box sx={{ width: '95%', margin: '20px' }}>
                <TableContainer component={Paper} sx={{ width: '100%', borderRadius: '10px', marginTop: { xs: '30px', lg: '0px' } }} >
                  <Table aria-label="simple table">
                    <TableBody >
                      {ActualInfo.map((row) => (<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
            <Box></Box>
          </Box>
        </Box>
       
      </Box>
    </>
  );
};

export default Cards;
