import { combineReducers } from "redux";
import ActiveUserReducer from "./ActiveUserReducer";

const allReducers = combineReducers({
    activeUser: ActiveUserReducer
})

export default allReducers;