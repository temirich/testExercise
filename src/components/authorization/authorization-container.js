import React from "react";
import { connect } from "react-redux";
import { enterActionCreator, loginActionCreator, passwordActionCreator } from "../../redux/authorization-reducer";
import Authorization from "./authorization";


let mapStateToProps =(state)=>{
    
    return{
        authorizationPage:state.authorizationPage
    };
  }
  
  let mapDispatchToProps=(dispatch)=>{
    return{
        updateLogin:(text)=>{
          let action = loginActionCreator(text);
          dispatch(action);
        },
        updatePassword:(text)=>{
            let action = passwordActionCreator(text);
            dispatch(action);
          },
        enter:()=>{
          dispatch(enterActionCreator());
        }
  };
}
  
 const AuthorizationContainer=connect(mapStateToProps,mapDispatchToProps)(Authorization);

export default AuthorizationContainer