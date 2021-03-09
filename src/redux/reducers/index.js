import { combineReducers } from "redux";
import outText from "./outText";
import online from "./online";
import like from "./like";
import loading from "./loading";

export const reducers = combineReducers({
  outText: outText,
  online: online,
  like: like,
  loading: loading,
});
