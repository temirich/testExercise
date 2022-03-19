import React from "react";
import { connect } from "react-redux";
import Menu from "./menu";


let mapStateToProps =(state)=>{
    
    return{
        authorizationPage:state.authorizationPage
    };
  }
  
  let mapDispatchToProps=(dispatch)=>{
    return{
        
  };
}
  
 const MenuContainer=connect(mapStateToProps,mapDispatchToProps)(Menu);

export default MenuContainer