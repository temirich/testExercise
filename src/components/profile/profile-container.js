import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";




let mapStateToProps =(state)=>{
    
    return{
      profilePage:state.profilePage
    };
  }
  
  let mapDispatchToProps=(dispatch)=>{
    
  }
  
  const ProfileContainer=connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileContainer