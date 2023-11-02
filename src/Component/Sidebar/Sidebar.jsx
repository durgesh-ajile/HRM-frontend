import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import { AdminPanelSettingsSharp, AppRegistrationTwoTone, CalendarMonthOutlined, LoginTwoTone, Person3Outlined, PersonOffRounded } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchLogin } from '../../redux/admin/databaseSlice';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location  = useLocation();
  
  const token = JSON.parse(localStorage.getItem("token"));
  const tokenExpiry = new Date(token.expiry);
  token === null && dispatch(showToast({ type: "warning", message: "Token Has Expired ! Please SignIn Again", }));

  let currentDate = new Date();

  React.useEffect(() => {
    if (!tokenExpiry || (currentDate > tokenExpiry)) {
      navigate("/signin");
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = ()=>{
    localStorage.clear()
    navigate("/signin")
    dispatch(fetchLogin([]))
  }

  const drawer = (
    <div >
      <Toolbar />
      <Divider />
      <List >
        <ListItem disablePadding >
          <ListItemButton style={location.pathname === '/' ? {background: 'white', color:'black'} : {background: '#34495E', color:'white'}} >
            <ListItemIcon>
              <Person3Outlined style={location.pathname === '/' ? {color:'black'} : {color:'white'}} />
            </ListItemIcon>
            <ListItemText primary="All Contractors" onClick={() => (navigate("/"))} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding >
          <ListItemButton style={location.pathname === '/organizations' ? {background: 'white', color:'black'} : {background: '#34495E', color:'white'}} >
            <ListItemIcon>
              <Person3Outlined style={location.pathname === '/organizations' ? {color:'black'} : {color:'white'}} />
            </ListItemIcon>
            <ListItemText primary="Client-Organization" onClick={() => (navigate("/organizations?page=1"))} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding >
          <ListItemButton style={location.pathname === '/ourorganizations' ? {background: 'white', color:'black'} : {background: '#34495E', color:'white'}} >
            <ListItemIcon>
              <Person3Outlined style={location.pathname === '/ourorganizations' ? {color:'black'} : {color:'white'}} />
            </ListItemIcon>
            <ListItemText primary="Our-Organization" onClick={() => (navigate("/ourorganizations?page=1"))} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding >
          <ListItemButton >
            <ListItemIcon style={{color: "#FFFFFF"}}>
              <CalendarMonthOutlined />
            </ListItemIcon>
            <ListItemText style={{color: "#FFFFFF"}} primary="LogOut" onClick={() => { handleLogout() }} />
          </ListItemButton>
        </ListItem>
      </List>
      {/* <Divider /> */}

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: "column" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%", // Full width
          zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it's above the drawer
          backgroundColor: "#F1F6F9",
        }}
      >
        <Toolbar >
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#27374D" },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#27374D" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
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