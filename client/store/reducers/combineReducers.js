import { combineReducers } from "redux";
import shoppingReducer from "./shoppingReducer.js";

const reducers = combineReducers({
  shopping: shoppingReducer,
});

export default reducers;
