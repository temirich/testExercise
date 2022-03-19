import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./authorization.css"

function Authorization(props) {

    let navigate = useNavigate();

    let state = props.authorizationPage;
    let newLogin = state.newLogin;
    let newPassword = state.newPassword;


    let onButtonClick = () => {
        props.enter();
    }

    let onLoginChange = (event) => {
        let login = event.target.value;
        props.updateLogin(login);

    }

    let onPasswordChange = (event) => {
        let password = event.target.value;
        props.updatePassword(password);

    }


    if (window.localStorage.getItem("isAuthorization") === 'true') {
        //window.location.replace("/Profile");
        navigate("/Profile");
    }


    return (
        <div className="Authorization">
            <form className="Forms">
                <table className="Inputs">
                    <tbody>
                        <tr>
                            <td><input value={newLogin}
                                onChange={onLoginChange}
                                className="AuthorizationInputs"
                                placeholder="Name...">
                            </input></td>
                        </tr>
                        <tr>
                            <td><input value={newPassword}
                                onChange={onPasswordChange}
                                className="AuthorizationInputs"
                                placeholder="Password...">
                            </input></td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" onClick={onButtonClick} className="AuthorizationButton" >Войти</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </div>
    );
}

export default Authorization;