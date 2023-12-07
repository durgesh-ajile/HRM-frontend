import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import './NotificationPopover.css'
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NotificationPopover = ({ message }) => {
  let currentDate = new Date();
  const { usertoken } = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate()
  const varDate = useRef('');

  const handleToday = (date) => {
    let modifiedDate = new Date(date)
    let mYear = modifiedDate.getFullYear()
    let mMonth = modifiedDate.getMonth()
    let mDate = modifiedDate.getDate()

    let cYear = currentDate.getFullYear()
    let cMonth = currentDate.getMonth()
    let cDate = currentDate.getDate()

    if (varDate.current === `${mDate}/${mMonth}/${mYear}`){
      return ''
    } else if (mYear === cYear && mMonth === cMonth && mDate === cDate) {
      varDate.current = `${mDate}/${mMonth}/${mYear}`
      return "Today"
    } else if (mYear === cYear && mMonth === cMonth && mDate === cDate - 1) {
      varDate.current = `${mDate}/${mMonth}/${mYear}`
      return "Yesterday"
    } else {
      varDate.current = `${mDate}/${mMonth}/${mYear}`
      return `${mDate}/${mMonth}/${mYear}`
    }
  }

  const makenotificationread = (id) =>
  axios({
    method: "patch",
    url: `https://braided-complex-403612.el.r.appspot.com/api/makenotificationread`,
    headers: {
      Authorization: `Bearer ${usertoken}`,
    },
    data: {
      notificationId: id
    }
  })
    .then((res) => {
      console.log(res)
      }
    )
    .catch((err) => {
      console.log(err);
    });

  const handleClick = (data) => {
    makenotificationread(data._id)
    if(data.Type === "Create Invoice"){
      navigate(`invoices/${data.Profile[1].ref._id}`)
    }
  }
  console.log(message)

  return (
    <div >
      <ScopedCssBaseline >
        <Paper
          square
          sx={{
            pb: "50px",
            width: 400,
            mr: "0px",
          }}
          id='style-1'
        >
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ p: 2, pb: 0 }}
          >
            Notifications
          </Typography>
          <List sx={{ mb: 2 }}>
            {message.map((data) => (
              
              <React.Fragment >
                <div onClick={() =>{
                handleClick(data)
              }}>
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  {handleToday(data.createdAt)}
                </ListSubheader>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" />
                  </ListItemAvatar>
                  <ListItemText>
                    {data.Message}
                  </ListItemText>
                  {data.read === false && <dot id='popup-dot'></dot>}
                </ListItem>
                </div>
              </React.Fragment>
            ))}
            
          </List>
        </Paper>
      </ScopedCssBaseline>
    </div>
  );
};

export default NotificationPopover;