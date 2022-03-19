import React from "react";
import "./header.css"
import picture from "../assets/images/logo.png"
import { NavLink } from "react-router-dom";
const Header=()=>{
    return(
        <header className="Header">
            <div><img className="HeaderPicture" src={picture}></img></div>
        </header>
    );
}

export default Header;