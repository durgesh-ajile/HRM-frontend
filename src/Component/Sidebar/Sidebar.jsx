import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";


import {
  AdminPanelSettingsSharp,
  AppRegistrationTwoTone,
  CalendarMonthOutlined,
  LoginTwoTone,
  Person3Outlined,
  PersonOffRounded,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchLogin } from "../../redux/admin/databaseSlice";
import { useDispatch } from "react-redux";
import NotificationPopover from "./NotificationPopover";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { expiry } = JSON.parse(localStorage.getItem("token"));

  let currentDate = new Date();

  React.useEffect(() => {
    if (!expiry || currentDate > expiry) {
      navigate("/signin");
    }
  }, []);

  console.log(currentDate > expiry);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
    dispatch(fetchLogin([]));
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            style={
              location.pathname === "/"
                ? { background: "white", color: "black" }
                : { background: "#34495E", color: "white" }
            }
          >
            <ListItemIcon>
              <Person3Outlined
                style={
                  location.pathname === "/"
                    ? { color: "black" }
                    : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="All Contractors"
              onClick={() => navigate("/")}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            style={
              location.pathname === "/organizations"
                ? { background: "white", color: "black" }
                : { background: "#34495E", color: "white" }
            }
          >
            <ListItemIcon>
              <Person3Outlined
                style={
                  location.pathname === "/organizations"
                    ? { color: "black" }
                    : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Client-Organization"
              onClick={() => navigate("/organizations?page=1")}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            style={
              location.pathname === "/ourorganizations"
                ? { background: "white", color: "black" }
                : { background: "#34495E", color: "white" }
            }
          >
            <ListItemIcon>
              <Person3Outlined
                style={
                  location.pathname === "/ourorganizations"
                    ? { color: "black" }
                    : { color: "white" }
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Our-Organization"
              onClick={() => navigate("/ourorganizations?page=1")}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ color: "#FFFFFF" }}>
              <CalendarMonthOutlined />
            </ListItemIcon>
            <ListItemText
              style={{ color: "#FFFFFF" }}
              primary="LogOut"
              onClick={() => {
                handleLogout();
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline sx={{ '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }}}/>
      <AppBar
        position="fixed"
        sx={{
          width: "100%", // Full width
          zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it's above the drawer
          backgroundColor: "#F1F6F9",
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <NotificationsIcon
              style={{
                color: "#000",
                cursor: "pointer",
                position: "absolute",
                right: "10",
                top: "20",
              }}
              aria-describedby={id}
              onClick={handleClick}
            />

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                mt: 1,
                mr: 0,
                height: 500,
              }}
            >
              <NotificationPopover sx={{}}/>
            </Popover>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#27374D",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#27374D",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;