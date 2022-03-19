import React from "react";
import { connect } from "react-redux";
import News from "./news";




let mapStateToProps =(state)=>{
    
    return{
      newsPage:state.newsPage
    };
  }
  
  let mapDispatchToProps=(dispatch)=>{
    
  }
  
  const NewsContainer=connect(mapStateToProps,mapDispatchToProps)(News);

export default NewsContainer