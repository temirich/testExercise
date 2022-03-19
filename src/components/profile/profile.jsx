import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./profile.css"
function Profile(props) {
  let state = props.profilePage;

    return (
      <div className="Profile">
        <div className="HeadOfProfile">
          <div>
            <img className="PhotoOfProfile" src={state.photo} width="250px" height="250px"></img>
          </div>
          <div>
            <div className="NameOfUser">
              {state.name}
            </div>
            <div className="TextOfProfile">
              <div className="Title">
                О себе:
              </div>
              <div className="Comments">
                {state.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
  
}

  export default Profile;