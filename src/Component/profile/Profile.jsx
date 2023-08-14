import "./Profile.css";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { Avatar, CardHeader, Typography } from "@mui/material";
import { Grid } from "@mui/joy";

import Cardss from "./Cards";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { asyncThunkGetDitailsOfContractor } from "../../redux/createAsyncThunk";
import { useDispatch, useSelector } from "react-redux";

import "./cards.css";
import { showToast } from "../../redux/errorSlice/errorSlice";

export default function Profile() {

  const { contractorId } = useParams();
  const dispatch = useDispatch()
  const { ContractorDataById } = useSelector(store => store.admin)

  useEffect(() => {
    const payload = { contractorId };
    dispatch(asyncThunkGetDitailsOfContractor(payload))
  }, [contractorId, dispatch])

  return (
    <>
      {
        ContractorDataById?.profileId
          ? <div className='section' style={{ width: "100%", height: "100%" }}>
            <Card
              variant="solid"
              invertedColors
              sx={{
                width: "100%",
                position: "relative",
                backgroundColor: "white",
                color: "black",
                flexGrow: 1,
                p: 2,
                mx: -3,
                my: -3,
                borderRadius: { xs: 0, sm: 'xs' },
                height: "50%",
              }}
            >

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },

                  alignItems: { md: 'flex-start' },
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                  gap: 2,

                }}
              >


                <Grid item style={{ display: "flex", flexDirection: "row", marginTop: "30px", marginLeft: "0px" }}>
                  <Avatar aria-label="recipe" style={{ height: "100px", width: "100px", borderRadius: "50%" }}>
                    <img src={'https://mui.com/static/images/avatar/3.jpg'} style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "center" }} />
                  </Avatar>
                  <Grid item style={{ marginTop: "-22px", marginLeft: "40px", }}>

                    <h1 style={{ fontWeight: "666", marginBottom: '15px' }}>{ContractorDataById?.first_name} {ContractorDataById?.last_name}</h1>
                    <p style={{ marginTop: "-25px", color: "gray", fontWeight: "666" }}>{ContractorDataById?.profileId?.Address}</p>

                    {/* <button onClick={() => handleNavigateToCalendar('/calender')} id='btn' style={{ marginTop: "10px", height: "40px", width: "160px", border: "none", borderRadius: "3%" }}>Calendar</button> */}
                    <button
                      // onClick={() => handleNavigateToCalendar('/contractorform/petchUpdate')} 
                      id='btn' style={{ marginTop: "10px", height: "40px", width: "160px", border: "none", borderRadius: "3%" }}>Profile</button>

                  </Grid>

                </Grid>
                <CardHeader />
                <List
                  size="sm"
                  orientation="horizontal"
                  wrap
                  sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
                  style={{ marginLeft: "0px", color: "black", marginTop: "20px" }}
                >
                  <ListItem nested sx={{ width: { xs: '50%', md: 140, color: "black" } }}>

                    <List>
                      <ListItem >
                        <ListItem style={{ color: "black", fontWeight: "666" }}>Phone:</ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItem style={{ color: "black", fontWeight: "666" }}>Email:</ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItem style={{ color: "black", fontWeight: "666" }}>Birthday:</ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItem style={{ color: "black", fontWeight: "666" }}>Address:</ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItem style={{ color: "black", fontWeight: "666" }}>Gender:</ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItem style={{ color: "black", fontWeight: "666" }}>Reports to:</ListItem>
                      </ListItem>
                    </List>
                  </ListItem>
                  <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>

                    <List sx={{ '--ListItemDecorator-size': '32px' }}>
                      <ListItem>
                        <ListItem style={{ color: "blue", fontWeight: "666" }}>

                          {ContractorDataById?.profileId?.EmergencyContactNumber}
                        </ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItem style={{ color: "blue", fontWeight: "666" }}>

                          {ContractorDataById?.email}
                        </ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItem style={{ color: "gray", fontWeight: "666" }}>

                          {ContractorDataById?.profileId?.Birthday}
                        </ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItem style={{ color: "gray", fontWeight: "666" }}>

                          {ContractorDataById?.profileId?.Address}

                        </ListItem>

                      </ListItem>
                      <ListItem>
                        <ListItem style={{ color: "gray", fontWeight: "666" }}>
                          {ContractorDataById?.profileId?.Gender}
                        </ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItem style={{ gap: "10px", color: "blue", fontWeight: "666" }}>
                          <Avatar  >
                            <img src={'https://mui.com/static/images/avatar/3.jpg'} style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "center" }} />
                          </Avatar>
                          {ContractorDataById?.profileId?.ReportTo}
                        </ListItem>
                      </ListItem>
                    </List>
                  </ListItem>
                </List>
                <span style={{ height: "39px", width: "39px", backgroundColor: "lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginLeft: "10px" }} >
                  {/* <EditIcon color="disabled" /> */}
                </span>
              </Box>

            </Card >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Cardss ContractorDataById={ContractorDataById} />
            </Box>
          </div>
          :
          <Box sx={{width:'100%',height:'91vh',display:'flex',justifyContent:'center',alignItems:'center'}} >
            <Box  >
              <Typography variant="h4" >Contractor Has Not Fill The Form.</Typography>
            </Box>
          </Box>
      }


    </>
  );
}
