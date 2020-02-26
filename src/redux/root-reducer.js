import { combineReducers } from "redux";
import { currencyReducer } from "./currencylist/currencylist.reducer";

export default combineReducers({
  currencylist: currencyReducer
});
