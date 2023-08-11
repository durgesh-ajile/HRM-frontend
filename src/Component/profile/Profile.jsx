import "./Profile.css";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { Avatar, CardHeader } from "@mui/material";
import { Grid } from "@mui/joy";

import Cardss from "./Cards";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { asyncThunkGetDitailsOfContractor } from "../../redux/createAsyncThunk";
import { useDispatch, useSelector } from "react-redux";

import "./cards.css";

export default function Profile() {

  const { contractorId } = useParams();
  const dispatch = useDispatch()
  const { ContractorDataById } = useSelector(store => store.admin)

  useEffect(() => { const payload = { contractorId }; dispatch(asyncThunkGetDitailsOfContractor(payload)) }, [contractorId, dispatch])

  console.log('ContractorDataById', ContractorDataById)
  return (
    <>

      <div className='section' style={{ width: "100%", height: "100%" }}>
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
        <Cardss ContractorDataById={ContractorDataById} />
      </div>






      {/* <div className="section" style={{}}>
        <Card
          variant="solid"
          invertedColors
          sx={{
            maxWidth: "100vw",
            position: "relative",
            backgroundColor: "white",
            color: "black",
            flexGrow: 1,
            p: 2,
            my: -3,
            borderRadius: { xs: 0, sm: "xs" },
            height: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },

              alignItems: { md: "flex-start" },
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Grid
              item
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "30px",
                marginLeft: "0px",
              }}
            >
              <Avatar id="avtar" aria-label="recipe">
                <img
                  src={"https://mui.com/static/images/avatar/3.jpg"}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Avatar>
              <Grid id="grid" item style={{}}>
                <h1
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "666",
                    marginBottom: "15px",
                  }}
                >
                  John Doe
                </h1>
                <p
                  style={{
                    marginTop: "-10px",
                    color: "gray",
                    fontWeight: "666",
                  }}
                >
                  UI/UX Designer Team
                </p>
                <p
                  style={{
                    marginTop: "-10px",
                    color: "gray",
                    fontWeight: "666",
                  }}
                >
                  Web Designer
                </p>
                <h3
                  style={{
                    marginTop: "-13px",
                    fontWeight: "666",
                    fontSize: "1rem",
                  }}
                >
                  Employees ID : FT-0001
                </h3>
                <p
                  style={{
                    marginTop: "-5px",
                    color: "gray",
                    fontWeight: "666",
                  }}
                >
                  Date of Join : 1st Jan 2013
                </p>

                <button
                  id="btn"
                  style={{
                    marginTop: "10px",
                    border: "none",
                    borderRadius: "3%",
                  }}
                >
                  Send Message
                </button>
              </Grid>
            </Grid>
            <CardHeader />

            <List
              size="sm"
              orientation="horizontal"
              wrap
              sx={{ flexGrow: 0, "--ListItem-radius": "8px" }}
              style={{ marginLeft: "0px", color: "black", marginTop: "20px" }}
            >
              <ListItem
                id="list_dt1"
                nested
                sx={{ width: { xs: "50%", md: 140, color: "black" } }}
              >
                <List>
                  <ListItem>
                    <ListItem style={{ color: "black", fontWeight: "666" }}>
                      Phone:
                    </ListItem>
                  </ListItem>
                  <ListItem>
                    <ListItem style={{ color: "black", fontWeight: "666" }}>
                      Email:
                    </ListItem>
                  </ListItem>
                  <ListItem>
                    <ListItem style={{ color: "black", fontWeight: "666" }}>
                      Birthday:
                    </ListItem>
                  </ListItem>
                  <ListItem>
                    <ListItem style={{ color: "black", fontWeight: "666" }}>
                      Address:
                    </ListItem>
                  </ListItem>
                  <ListItem>
                    <ListItem style={{ color: "black", fontWeight: "666" }}>
                      Gender:
                    </ListItem>
                  </ListItem>
                  <ListItem>
                    <ListItem style={{ color: "black", fontWeight: "666" }}>
                      Reports to:
                    </ListItem>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem
                id="list_dt"
                nested
                sx={{ width: { xs: "50%", md: 180 } }}
              >
                <List sx={{ "--ListItemDecorator-size": "32px" }}>
                  <ListItem>
                    <ListItem
                      className="list_details"
                      style={{ color: "blue", fontWeight: "666" }}
                    >
                      9797979797
                    </ListItem>
                  </ListItem>
                  <ListItem>
                    <ListItem
                      id="list_details1"
                      className="list-details"
                      style={{ color: "blue", fontWeight: "666" }}
                    >
                      admin@dreamguystrech.com
                    </ListItem>
                  </ListItem>
                  <ListItem>
                    <ListItem
                      className="list_details"
                      style={{ color: "gray", fontWeight: "666" }}
                    >
                      24th Julay
                    </ListItem>
                  </ListItem>
                  <ListItem>
                    <ListItem
                      id="list_details2"
                      className="list-details"
                      style={{ color: "gray", fontWeight: "666" }}
                    >
                      1861 Bayonna Ave,Manchester,Township
                    </ListItem>
                  </ListItem>
                  <ListItem>
                    <ListItem
                      className="list_details"
                      style={{ color: "gray", fontWeight: "666" }}
                    >
                      Male
                    </ListItem>
                  </ListItem>
                  <ListItem>
                    <ListItem
                      className="list_details"
                      style={{ gap: "10px", color: "blue", fontWeight: "666" }}
                    >
                      <Avatar>
                        <img
                          src={"https://mui.com/static/images/avatar/3.jpg"}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </Avatar>
                      Joffrey Lallor
                    </ListItem>
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Box>

          <Divider style={{ backgroundColor: "gray" }} sx={{ my: 2 }} />
          <Box
            id="bx-ftr"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginLeft: "30px",
            }}
          >
            <Typography style={{ color: "gray", fontWeight: "666" }}>
              Profile
            </Typography>
            <Typography style={{ color: "gray", fontWeight: "666" }}>
              Project
            </Typography>
            <Typography style={{ color: "gray", fontWeight: "666" }}>
              Bank & Statutory
              <span style={{ color: "red", fontWeight: "666" }}>
                (Admin Only)
              </span>
            </Typography>
            <Typography style={{ color: "gray", fontWeight: "666" }}>
              Assets
            </Typography>
          </Box>
        </Card>
        <Cardss />
      </div> */}
    </>
  );
}
