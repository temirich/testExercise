import { combineReducers, createStore } from "redux";
import authorizationReducer from "./authorization-reducer";
import mainReducer from "./main-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";

let reducers=combineReducers({
    mainPage: mainReducer,
    newsPage: newsReducer,
    profilePage:profileReducer,
    authorizationPage:authorizationReducer
});

let store =createStore(reducers);

export default store;