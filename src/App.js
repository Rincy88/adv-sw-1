/* global google */

import './App.css';
import React,{Component} from 'react';
import { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import Advantage_img from './static/Advantage_Software.png'
import CreateLicense from './components/CreateLicense';
import Dashboard from './components/Dashboard';
import EditLicense from './components/EditLicense';



const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

  

});

function App() {
  const classes = useStyles();
  const [isSignedIn, setIsSignedIn] = useState(false);
const [userInfo, setUserInfo] = useState(null)

  const onOneTapSignedIn = response => {
    setIsSignedIn(true)
    console.log(response.credential+"response")
    const ID_Token=response.credential;
    response.select_by="user_1tap"
    console.log(isSignedIn+" is signed in")
  }

  const signIn=()=>{
    setIsSignedIn(true)
   
  }

  useEffect(() => {
    const googleApi = document.createElement('script')
    googleApi.setAttribute('src', 'https://accounts.google.com/gsi/client')
    googleApi.onload = () => initializeGSI();
    document.querySelector('body').appendChild(googleApi)
  }, [])

  const initializeGSI = () => {
    google.accounts.id.initialize({
      client_id: '741088279616-3opt3hte6p8v6fgegd0e5umof1tln22n.apps.googleusercontent.com',
      
      auto_select:true,
      //login_uri:
      //ux_mode:"popup",
      callback: onOneTapSignedIn
    });
  google.accounts.id.prompt((notification) => {
   
   });

     // Display the Sign In With Google Button
     google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: 'outline', size: 'large',width:'290',height:'64' }
    );

  }

  const signout = () => {
    
    google.accounts.id.disableAutoSelect();
  }

 

  return (
  
   
    <div >
        { isSignedIn &&
          <div>
            <Dashboard/>
           
          </div>} 

          {!isSignedIn &&
          
         <form className='form'  style={{height:37 , width:294}}>
          <img src={Advantage_img} alt="Advantage Software" position="absolute"/>
      
          
          <Button id="buttonDiv"  style={{padding:25 }}   />
         
       </form>
         
       
   }
        
        </div>
   
  );
}

export default App;
