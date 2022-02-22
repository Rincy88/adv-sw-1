import * as React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import LayoutHeader from './LayoutHeader'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import WidgetLayout from './WidgetLayout'
import { Link } from 'react-router-dom';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import FormatColorTextRoundedIcon from '@mui/icons-material/FormatColorTextRounded';
import { withStyles } from '@mui/styles';

const useStyles=makeStyles({  
    toolbar:{
        backgroundColor:'white',
    },
    dashboard:{
      marginInlineStart:40,
      marginInlineEnd:40,
      marginLeft:40
    },
    customWidth: {
      '& div': {
          height:100,
          marginTop:5,
          width: '225px',
          marginLeft: -20,
          borderRadius:14,
          padding: 10 ,
          display:'-ms-inline-flexbox'
      }
  }

});

const StyledMenuItem = withStyles(theme => ({
  root: {
    paddingBlock:20,
    borderRadius:10,
    "&:hover": {  
        borderRadius:12,
       
    }
    
  }
}))(MenuItem);

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
    
     
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
  }));

const Search = styled('div')(({ theme }) => ({
    boxShadow: '0 2px 5px 1px rgba(64,60,67,.16)',
    position: 'relative',
    borderRadius: 12,
    maxWidth:355,
    outlineColor:'black',
    borderColor:'black',
    backgroundColor:'#F4F4F4',
    marginRight: 10,
    marginLeft: 0,
    marginTop: 40,
    height:40,
    width: 360,
    [theme.breakpoints.up('sm')]: {
     
      
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Item = styled(Paper)(({ theme }) => ({
   
    padding: theme.spacing(1),
    marginInlineStart: 23,
    marginInlineEnd: 47,
    marginTop: 20,
    borderRadius: 12,
    boxShadow:"none"
    
    
  })); 

  const Dashboard=()=>{
    
    const propsData={
      title: "Keyless Keyprog: Admin Portal"
    }
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLoaded, setIsLoaded]=React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
 

  return (
      
    <div><LayoutHeader title={propsData.title}/><div className={classes.dashboard}>

     <Grid container  columns={16} >
     <Grid  item xs={8} ><Item> 
        <Search >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Enter license no. or customer id here"
            inputProps={{ 'aria-label': 'search' }} />
        </Search>
        </Item></Grid>
        <Grid item xs={8}> <Item>
        <div style={{marginRight:-20}}> 
        <Button style={{ marginTop: 40, width:222,height:48, borderRadius: 10,  float: "right", backgroundColor: "black", color: "white" }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <span style={{textTransform:"none"}}>+ Create a new License</span>
      </Button>
      <Menu className={classes.customWidth}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
        <StyledMenuItem >< FormatColorTextRoundedIcon style={{marginRight:10}}/><Link to="/CreateLicense" style={{color:"black",textDecoration: "none"}}>Manual Entry</Link></StyledMenuItem>
        <StyledMenuItem >< RefreshRoundedIcon style={{marginRight:10}}/><Link to="/CreateLicense" style={{color:"black",textDecoration: "none"}}>Auto-Generate</Link></StyledMenuItem>
      </Menu>
          </div>
        </Item>
        </Grid>
        </Grid>
    
    <WidgetLayout/>
     
       </div>
      
    
     
       </div>
  )}
     
  export default Dashboard;