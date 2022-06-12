import { combineReducers } from "redux";

// Reducers
import playerReducer from "./playerReducer";

const rootReducer = combineReducers({
  playerReducer,
});

export default rootReducer;
