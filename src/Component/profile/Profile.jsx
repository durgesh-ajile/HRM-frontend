import "./Profile.css";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { Avatar, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { Grid } from "@mui/joy";

import Cardss from "./Cards";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { asyncThunkGetDitailsOfContractor } from "../../redux/createAsyncThunk";
import { useDispatch, useSelector } from "react-redux";

import "./cards.css";
import { showToast } from "../../redux/errorSlice/errorSlice";

export default function Profile() {

  const { contractorId } = useParams();
  const dispatch = useDispatch()
  const { ContractorDataById } = useSelector(store => store.admin)
  const [formattedDate, setFormattedDate] = useState();


  // MUI table
  function createData(name, calories) {
    return { name, calories };
  }
  // MUI table
  const rows = [
    createData('Phone', ContractorDataById?.profileId?.EmergencyContactNumber),
    createData('Email', ContractorDataById?.email),
    createData('Birthday', formattedDate),
    createData('Address', ContractorDataById?.profileId?.Address),
    createData('Gender', ContractorDataById?.profileId?.Gender),
    createData('Reports to', ContractorDataById?.profileId?.ReportTo),
  ];

  useEffect(() => {
    const payload = { contractorId };
    dispatch(asyncThunkGetDitailsOfContractor(payload))

    // Create a Date object with the provided date and time
    const dateObject = new Date(ContractorDataById?.profileId?.Birthday);

    // Extract the components of the date
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Months are zero-based, so add 1
    const year = dateObject.getFullYear() % 100; // Extract last two digits of the year

    // Pad the components with leading zeros if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedYear = year < 10 ? `0${year}` : year;

    // Combine the components into the desired format
    `${formattedDay}/${formattedMonth}/${formattedYear}`;
    setFormattedDate(`${formattedDay}/${formattedMonth}/${formattedYear}`)
  }, [contractorId, dispatch])
  console.log('ContractorDataById', ContractorDataById, ContractorDataById?.profileId?.Birthday)

  return (
    <>
      {
        ContractorDataById?.profileId ?
          <Box sx={{backgroundColor:'#F1F6F9'}}>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', lg: 'row' } }}>
              <Box sx={{ width: { sx: '100%', lg: '32%' }, backgroundColor: 'white', margin: '20px', border: '1px solid gray' }}>
                <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: '60px', marginBottom: '20px' }}>
                  <Avatar aria-label="recipe" style={{ height: "100px", width: "100px", borderRadius: "50%", }}>
                    <img src={"https://mui.com/static/images/avatar/3.jpg"} style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "center", }} />
                  </Avatar>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <h1 style={{ fontSize: '25px', marginBottom: '20px' }}>{ContractorDataById?.first_name} {ContractorDataById?.last_name}</h1>
                  <p style={{ color: "gray", lineHeight: '10px', marginBottom: '60px' }}>{ContractorDataById?.profileId?.Address}</p>
                </Box>
              </Box>
              <Box sx={{ width: { sx: '100%', lg: '65%' }, marginTop: { sx: '0px', lg: '20px' }, marginRight: '20px', marginBottom: '20px', marginLeft: { sm: '20px', md: '20px', lg: '0px' } }}>
                <TableContainer sx={{ border: '1px solid gray' }} component={Paper} >
                  <Table aria-label="caption table">
                    <TableBody sx={{ marginRight: '20px', marginLeft: '20px' }}>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell sx={{ fontSize: '15px', fontWeight: '700', paddingLeft: '4%' }} component="th" scope="row">{row.name}</TableCell>
                          <TableCell sx={{ fontSize: '15px', fontWeight: '700', paddingRight: '4%' }} align="right">{row.calories}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Cardss ContractorDataById={ContractorDataById} />
            </Box>
          </Box>

          // ? <div className='section' style={{ width: "100%", height: "100%" }}>
          //   <Card
          //     variant="solid"
          //     invertedColors
          //     sx={{
          //       width: "100%",
          //       position: "relative",
          //       backgroundColor: "white",
          //       color: "black",
          //       flexGrow: 1,
          //       p: 2,
          //       mx: -3,
          //       my: -3,
          //       borderRadius: { xs: 0, sm: 'xs' },
          //       height: "50%",
          //     }}
          //   >

          //     <Box
          //       sx={{
          //         display: 'flex',
          //         flexDirection: { xs: 'column', md: 'row' },

          //         alignItems: { md: 'flex-start' },
          //         justifyContent: 'space-around',
          //         flexWrap: 'wrap',
          //         gap: 2,

          //       }}
          //     >


          //       <Grid item style={{ display: "flex", flexDirection: "row", marginTop: "30px", marginLeft: "0px" }}>
          //         <Avatar aria-label="recipe" style={{ height: "100px", width: "100px", borderRadius: "50%" }}>
          //           <img src={'https://mui.com/static/images/avatar/3.jpg'} style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "center" }} />
          //         </Avatar>
          //         <Grid item style={{ marginTop: "-22px", marginLeft: "40px", }}>

          //           <h1 style={{ fontWeight: "666", marginBottom: '15px' }}>{ContractorDataById?.first_name} {ContractorDataById?.last_name}</h1>
          //           <p style={{ marginTop: "-25px", color: "gray", fontWeight: "666" }}>{ContractorDataById?.profileId?.Address}</p>

          //           {/* <button onClick={() => handleNavigateToCalendar('/calender')} id='btn' style={{ marginTop: "10px", height: "40px", width: "160px", border: "none", borderRadius: "3%" }}>Calendar</button> */}
          //           <button
          //             // onClick={() => handleNavigateToCalendar('/contractorform/petchUpdate')} 
          //             id='btn' style={{ marginTop: "10px", height: "40px", width: "160px", border: "none", borderRadius: "3%" }}>Profile</button>

          //         </Grid>

          //       </Grid>
          //       <CardHeader />
          //       <List
          //         size="sm"
          //         orientation="horizontal"
          //         wrap
          //         sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
          //         style={{ marginLeft: "0px", color: "black", marginTop: "20px" }}
          //       >
          //         <ListItem nested sx={{ width: { xs: '50%', md: 140, color: "black" } }}>

          //           <List>
          //             <ListItem >
          //               <ListItem style={{ color: "black", fontWeight: "666" }}>Phone:</ListItem>
          //             </ListItem>
          //             <ListItem>
          //               <ListItem style={{ color: "black", fontWeight: "666" }}>Email:</ListItem>
          //             </ListItem>
          //             <ListItem>
          //               <ListItem style={{ color: "black", fontWeight: "666" }}>Birthday:</ListItem>
          //             </ListItem>
          //             <ListItem>
          //               <ListItem style={{ color: "black", fontWeight: "666" }}>Address:</ListItem>
          //             </ListItem>
          //             <ListItem>
          //               <ListItem style={{ color: "black", fontWeight: "666" }}>Gender:</ListItem>
          //             </ListItem>
          //             <ListItem>
          //               <ListItem style={{ color: "black", fontWeight: "666" }}>Reports to:</ListItem>
          //             </ListItem>
          //           </List>
          //         </ListItem>
          //         <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>

          //           <List sx={{ '--ListItemDecorator-size': '32px' }}>
          //             <ListItem>
          //               <ListItem style={{ color: "blue", fontWeight: "666" }}>

          //                 {ContractorDataById?.profileId?.EmergencyContactNumber}
          //               </ListItem>
          //             </ListItem>
          //             <ListItem>
          //               <ListItem style={{ color: "blue", fontWeight: "666" }}>

          //                 {ContractorDataById?.email}
          //               </ListItem>
          //             </ListItem>
          //             <ListItem>
          //               <ListItem style={{ color: "gray", fontWeight: "666" }}>

          //                 {formattedDate}
          //               </ListItem>
          //             </ListItem>
          //             <ListItem>
          //               <ListItem style={{ color: "gray", fontWeight: "666" }}>

          //                 {ContractorDataById?.profileId?.Address}

          //               </ListItem>

          //             </ListItem>
          //             <ListItem>
          //               <ListItem style={{ color: "gray", fontWeight: "666" }}>
          //                 {ContractorDataById?.profileId?.Gender}
          //               </ListItem>
          //             </ListItem>
          //             <ListItem>
          //               <ListItem style={{ gap: "10px", color: "blue", fontWeight: "666" }}>
          //                 {ContractorDataById?.profileId?.ReportTo}
          //               </ListItem>
          //             </ListItem>
          //           </List>
          //         </ListItem>
          //       </List>
          //       {/* <span style={{ height: "39px", width: "39px", backgroundColor: "lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginLeft: "10px" }} >
          //         <EditIcon color="disabled" />
          //       </span> */}
          //     </Box>

          //   </Card >
          //   <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          //     <Cardss ContractorDataById={ContractorDataById} />
          //   </Box>
          // </div>
          :
          <Box sx={{ width: '100%', height: '91vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Box  >
              <Typography variant="h4" >Contractor Has Not Fill The Form.</Typography>
            </Box>
          </Box>
      }


    </>
  );
}
