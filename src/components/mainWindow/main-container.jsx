import React from "react";
import { connect } from "react-redux";
import Main from "./main";




let mapStateToProps =(state)=>{
    
    return{
      mainPage:state.mainPage
    };
  }
  
  let mapDispatchToProps=(dispatch)=>{
    
  }
  
  const MainContainer=connect(mapStateToProps,mapDispatchToProps)(Main);

export default MainContainer