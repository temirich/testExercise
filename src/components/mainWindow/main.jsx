import React from "react";
import "./main.css"

function Main(props) {
  debugger;
  let state=props.mainPage;
  
  return (

    <div className="Main">
      <div>
        <img className="PictureMain" src={state.photo} />
      </div>
      <div className="TextMain">
        <div className="TitleText">
          Le Louvre:
        </div>
        <div className="TextContent">
          {state.text}
        </div>
      </div>
    </div>
  );
}

export default Main;