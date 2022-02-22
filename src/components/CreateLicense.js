import React from 'react'
import LayoutHeader from './LayoutHeader';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material'; 
import { makeStyles } from '@mui/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import '../App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import backIcon from '../static/backwards.svg';
import CircleIcon from '@mui/icons-material/Circle';

  const useStyles=makeStyles({  
      
      layout :{
        marginTop:40,
       
        marginInlineStart:40,
        marginInlineEnd:40
       
    },
    textField:{
      borderRadius:15
    },
    
    
});


const CreateLicense =()=>{

  const propsData={
    title:"Create a new license"
  }
  const [type, setType] = React.useState('');
  const [service, setService] = React.useState('');
  const [stenoOrSpeech, setStenoOrSpeech] = React.useState('');
  const [value, setValue] = React.useState(null);
  
  const [supportExpValue, setSupportExpValue] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  const [checkedBridge, setCheckedBridge] = React.useState(false);
  
  const [checkedDeadkey, setCheckedDeadkey] = React.useState(false);
  const handleChange = (event) => {
    setType(event.target.value);
  };

  
  const handleChangeService = (event) => {
    setService(event.target.value);
  };

  const  ChangeStenoOrSpeech= (event) => {
    setStenoOrSpeech(event.target.value);
  };
  
  const handleChangeOffline = (event) => {
    setChecked(event.target.checked);
  };
  
  const handleChangeBridge = (event) => {
    setCheckedBridge(event.target.checked);
  };
  
  
  const handleChangeDeadkey = (event) => {
    setCheckedDeadkey(event.target.checked);
  };
  const handleSubmit=()=>{

  }

  const styles = {
    "&.MuiButton-root": {
      border: "1px #D0D0D0 solid "
    },
    "&.MuiButton-outlined": {
      color: "black"
    },
    
     textTransform: "none"
   
  };
  

  const classes = useStyles();

    return(
        <div><LayoutHeader title={propsData.title}/>
       <form onSubmit={handleSubmit}>
         <Box className={classes.layout}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, },
      
      }}
      noValidate
      autoComplete="off"
    >
      <div className={classes.layout} >
     
      <img src={backIcon} alt='backwards' style={{marginTop:-5, marginLeft:-20}}></img>

        <TextField
          
          id="Customer ID"
          label="Customer ID"
          variant='outlined'
          size="small"
          placeholder="Enter Customer ID"
         
        />
         <TextField
          
          id="Customer email"
          label="Customer Email"
          variant='outlined'
          size="small"
          placeholder='Enter email'
          
        />
         <TextField
          
          id="License ID"
          label="License ID"
          variant='outlined'
          size="small"
          placeholder='Enter license'
         
        />
        <Button
        type="submit"
        
        variant="outlined"
        color="inherit"
       sx={styles}
       style={{float:"right", borderRadius:10, width:90}}
      >
        <DoneAllIcon style={{marginRight:2}}/> Save
      </Button>
                      
      </div>
     
     
      
      

      </Box>
       
      <Divider />
      <div>
        <Grid container  columns={12} style={{marginTop:10, marginLeft:80}} >
     <Grid  item xs={8}  > 
        <Typography className={classes.customText} style={{fontWeight:600}}>License Details</Typography>
        </Grid>
        <Grid  item xs={2}>
       <Typography style={{fontSize:12}}><CircleIcon  sx={{ fontSize: 10, color:"#8cc751" }}/> Last Updated: 02/11/2021  </Typography>
      </Grid>
      <Grid  item xs={2} >
     <Typography style={{fontSize:12,marginLeft:-20}}><CircleIcon  sx={{ fontSize: 10,color:"#8cc751" }}/> Updated by: Jeremy</Typography>
      </Grid>
      
       
      </Grid>
      </div>
      <div >
      
      <Box className={classes.layout}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,  }, marginTop:-3
      }}
      noValidate
      autoComplete="off"
    >
      <div className={classes.layout} >
      <FormControl sx={{ m: 1, minWidth: 264
       }}>
        <InputLabel style={{marginTop:-5}} id="Type">Type</InputLabel>
        <Select
          labelId="Type"
          id="select_type"
          value={type}
          label="Type"
          size="small"
          onChange={handleChange}
        >
          <MenuItem value="">Select a type </MenuItem>
          <MenuItem value="tran">Tran </MenuItem>
          <MenuItem value="Edit">Edit</MenuItem>
          <MenuItem value="AccuCap">AccuCap</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Bridge">Bridge</MenuItem>
        </Select>
       </FormControl>

      
       <TextField
          
          id="Version"
          label="Version"
          variant='outlined'
          size="small"
          placeholder='Enter a version'
          style={{minWidth:264}}
          
        />
          <FormControl sx={{ m: 1, minWidth: 264 }}>
        <InputLabel style={{marginTop:-5}} id="Service">Service</InputLabel>
        <Select
          labelId="Service"
          id="service"
          value={service}
          label="Service"
          size="small"
          onChange={handleChangeService}
        >
          <MenuItem value="">Select a value from steno </MenuItem>
          <MenuItem value="GoogleSpeech">GoogleSpeech </MenuItem>
          <MenuItem value="Speechmatics">Speechmatics</MenuItem>
          <MenuItem value="Watson">Watson</MenuItem>
          <MenuItem value="Azure">Azure</MenuItem>
          <MenuItem value="Kensho">Kensho</MenuItem>
          
        </Select>
       </FormControl>
                      
      </div>
      <div style={{ marginLeft:40, marginTop:20}}>
      <FormControl sx={{ m: 1, minWidth: 264 }}>
        <InputLabel style={{marginTop:-5}} id="Steno/Speech">Steno/Speech</InputLabel>
        <Select
          labelId="Steno/Speech"
          id="Steno/Speech"
          value={stenoOrSpeech}
          size="small"
          label="Steno/Speech"
          onChange={ChangeStenoOrSpeech}
        >
          <MenuItem value="">Select a Service </MenuItem>
          <MenuItem value="Steno">Steno </MenuItem>
          <MenuItem value="Speech">Speech</MenuItem>
         
          
        </Select>
       </FormControl>

     
       <LocalizationProvider dateAdapter={AdapterDateFns} >
      
      <DatePicker
       
        label="License Expiration Date"
        placeholder="Pick an expiration date"
        onChange={(newValue) => {
          setValue(newValue);
        }}
        value={value}
        renderInput={(params) => <TextField {...params} size="small"/>}
      />
    </LocalizationProvider>

<TextField
           size="small"
          id="MinuteBalance"
          label="Minute Balance"
          variant='outlined'
          placeholder='Select a service to view balance'
          style={{minWidth:264}}
          
        />
      </div>
      <div  style={{ marginLeft:320, marginTop:20}}>  
      <LocalizationProvider  dateAdapter={AdapterDateFns}   >
      <DatePicker
        
        label="Support Expiration Date"
      
        placeholder="Pick an expiration date"
        onChange={(supportDate) => {
          setSupportExpValue(supportDate);
        }}
        value={supportExpValue}
       
        renderInput={(params) => <TextField {...params} size="small"/>}
      />
      </LocalizationProvider>
   </div>
      </Box>
      
      <Divider />            
      <div>
      <Box style={{marginTop:10, marginLeft:80}} 
     
      sx={{
        '& .MuiTextField-root': { m: 1,  }, marginTop:-3
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <Typography className={classes.customText} style={{fontWeight:600}}>Additional functionality</Typography>
        </div>
        
        <Typography style={{fontWeight:400, marginTop:15}}>Offline Capable
        <Switch   checked={checked}
      onChange={handleChangeOffline}
      inputProps={{ 'aria-label': 'controlled' }}/></Typography>

<Typography>Bridge Enabled
        <Switch   checked={checkedBridge}
      onChange={handleChangeBridge}
      inputProps={{ 'aria-label': 'controlled' }}/></Typography>
      
     
     
     </Box>
      </div>
      <Divider style={{marginTop:10}}/>
     <div>
      <Box style={{marginTop:10, marginLeft:80}} 
     
      sx={{
        '& .MuiTextField-root': { m: 1, }, marginTop:-3
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <Typography className={classes.customText} style={{fontWeight:600}}>Deadkey Status</Typography>
        </div>
        
        <Typography style={{fontWeight:400, marginTop:15}}>Deadkey
        <Switch   checked={checkedDeadkey}
      onChange={handleChangeDeadkey}
      inputProps={{ 'aria-label': 'controlled' }}/></Typography>

     </Box></div>
        
        </div>
        </form>
      </div>
    )
}
export default CreateLicense;