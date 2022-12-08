import { combineReducers } from "redux";
import locationReducer from "./location";
import loaderReducer from "./loader";

const rootReducer = combineReducers({
  location: locationReducer,
  loader: loaderReducer,
});

export default rootReducer;
