import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./menu.css"
const Menu = (props) => {
    
    let navigate=useNavigate();
    let state = props.authorizationPage;
    
    

    if (window.localStorage.getItem("isAuthorization")==="true") {
        return (
            <div className="Menu">
                <div className="Navbar">
                    <div >
                        <NavLink className="Nav-item" to="/Main">На главную</NavLink>
                    </div>
                    <div >
                        <NavLink className="Nav-item" to="/News">Новости</NavLink>
                    </div>
                    <div >
                        <NavLink className="Nav-item" to="/Profile">Профиль</NavLink>
                    </div>
                    <div>
                        <NavLink onClick={()=>{window.localStorage.setItem("isAuthorization",false);
                                                navigate("/Authorization"); }} className="Nav-item" to="/Authorization">Выйти</NavLink>
                    </div>
                </div>
            </div>
        );
    }
    if (window.localStorage.getItem("isAuthorization")==="false" || !state.isAuthorization) {
    return (
        <div className="Menu">
            <div className="Navbar">
                <div >
                    <NavLink className="Nav-item" to="/Main">На главную</NavLink>
                </div>
                <div >
                    <NavLink className="Nav-item" to="/News">Новости</NavLink>
                </div>
                <div >
                    <NavLink className="Nav-item" to="/Authorization">Профиль</NavLink>
                </div>
                <div>
                    <NavLink className="Nav-item" to="/Authorization">Авторизация</NavLink>
                </div>
            </div>
        </div>
    );
    }
}

export default Menu;