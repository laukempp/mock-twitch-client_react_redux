import { combineReducers } from "redux";
import auth from "./auth";
import streams from "./streams";

export default combineReducers({
  auth,
  streams: streams,
});
