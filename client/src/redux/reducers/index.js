import { combineReducers } from "redux";
import securityReducer from "./security";

const rootReducer = combineReducers({
    security: securityReducer
});

export default rootReducer;