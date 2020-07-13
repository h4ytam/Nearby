import { combineReducers } from "redux";
import authReducer from "./authReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
});
export default rootReducer;
