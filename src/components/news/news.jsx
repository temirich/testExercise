import React from "react";
import "./news.css"

function News(props) {
  let state=props.newsPage;

  return (
    <div className="News">
      
      <div className="BlockForNews">
        <div><img className="NewsPhoto" src={state.photo} /></div>
        <div className="ItemsForNews">
          <div className="TitleForNews">
            Le célèbre:
          </div>
          <div className="TextForNews">
            {state.text}
          </div>
        </div>
      </div>

      <div className="BlockForNews">
        <div><img className="NewsPhoto" src={state.photo} /></div>
        <div className="ItemsForNews">
          <div className="TitleForNews">
            Le célèbre:
          </div>
          <div className="TextForNews">
            {state.text}
          </div>
        </div>
      </div>

      <div className="BlockForNews">
        <div><img className="NewsPhoto" src={state.photo} /></div>
        <div className="ItemsForNews">
          <div className="TitleForNews">
            Le célèbre:
          </div>
          <div className="TextForNews">
            {state.text}
          </div>
        </div>
      </div>

    </div>
  );
}

export default News;