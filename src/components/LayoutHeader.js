import React from 'react';
import { makeStyles } from '@mui/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Tooltip } from '@mui/material';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge } from '@mui/material';
import logo from '../static/Brand_Logo.jpg';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';


const useStyles=makeStyles({  
    toolbar:{
        backgroundColor:'white',
        height:96
    },
    title:{
      width:287,
      height:25,
      color:'black'
    }
})

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const LayoutHeader=({title})=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const open = Boolean(anchorEl);
    const handleAvatar = (event) => {
      setAnchorEl(event.currentTarget);
      console.log(anchorEl)
      console.log(open)
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

return(

<Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={classes.appbar}>
              <Toolbar className={classes.toolbar}>
                  <Typography variant="h6" >
                      <img src={logo} alt="Advantage Software" style={{ marginRight: 24, marginLeft:40 }} className={classes.logo} />

                  </Typography>
                  <br /><br />
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop:-2 }} className={classes.title} >
                      {title}
                  </Typography>
                  <MenuItem>
                      <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          style={{ color: "black" }}
                      >
                          <Badge badgeContent={17} color="error">
                              <NotificationsNoneIcon />
                          </Badge>
                      </IconButton>

                  </MenuItem>

        
                 
                      <IconButton onClick={handleAvatar} style={{ marginTop: 0, marginRight:45 }}
                       aria-controls={open ? 'basic-menu' : undefined}
                       aria-haspopup="true" 
                       aria-expanded={open ? 'true' : undefined}>
                          <Avatar id="avatar" alt="Username" src="/Brand_Logo.jpg"  />
                      </IconButton>
   
                  <Menu 
                  style={{marginLeft:-40}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'avatar',
        }}
        
      >
        <MenuItem ><Link to="/CreateLicense" style={{color:"black",textDecoration: "none"}}>Profile</Link></MenuItem>
        <MenuItem ><Link to="/CreateLicense" style={{color:"black",textDecoration: "none"}}>sign out</Link></MenuItem>
      </Menu>

                 


              </Toolbar>
          </AppBar>
      </Box>

    )
}

export default LayoutHeader;