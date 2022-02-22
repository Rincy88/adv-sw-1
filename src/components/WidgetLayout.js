import * as React from 'react';

import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import logo from '../static/Brand_Logo.jpg';
import currentUsers from '../static/1.svg'
import BridgeMobile from '../static/2.svg'
import Activeteam from '../static/3.svg'
import Icon from '@mui/material/Icon';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
   
    padding: theme.spacing(2),
    paddingLeft:15,
    paddingInline:30,
    marginInlineStart: 23,
    
    marginTop: 20,
    borderRadius: 12,
    boxShadow:"none",
    width: 415.33, height: 192 ,
    
  })); 

  const useStyles = theme => ({
   img:{
       marginTop:20
   }
      });



class widgetLayout extends React.Component{
   

render(){
    const { classes } = this.props;

return <div style={{marginLeft:20}}>
 <Typography style={{ marginTop: 40, marginLeft:15, width: 226, height: 32, fontWeight: 600 }}>Dashboard/Widget View</Typography>
      
 <Grid container columns={18} style={{
      width: 1440, height: 299
    }}>
      <Grid item xs={6}>
        <Item style={{ backgroundColor: "rgba(181, 228, 202, 0.25)"}}>
         
            <img src={currentUsers} alt="Current Users" className={classes.img}/>
         <br /><br/>
          <Typography>
            Current Users Online
          </Typography><br />
          <Typography>
            <span> Online Users: Total Users: </span>
          </Typography></Item>
      </Grid>
      <Grid item xs={6}>
        <Item style={{ backgroundColor: "rgba(177, 229, 252, 0.25)" }}>
          
            <img src={BridgeMobile} alt="Bridge Mobile Active Sessions" className={classes.img}/>
         <br /><br/>
          <Typography>
            Bridge Mobile Active Sessions
          </Typography><br />
          <Typography>
            <span> Online Users: Total Users: </span>
          </Typography></Item>
      </Grid>
      <Grid item xs={6}>
        <Item style={{ backgroundColor: "rgba(202, 189, 255, 0.25)" }}>
         
            <img src={Activeteam} alt="Active Team Editing Sessions" className={classes.img} />
         <br /><br/>
          <Typography>
            Active Team Editing Sessions
          </Typography><br />
          <Typography>
            <span> Online Users: Total Users: </span>
          </Typography></Item>
      </Grid>
      </Grid>
      </div>
    }

}

export default withStyles(useStyles)(widgetLayout);