import { combineReducers } from "redux";

// Reducers
import playerReducer from "./playerReducer";
import questionsReducer from "./questionsReducer";

const rootReducer = combineReducers({
  playerReducer,
  questionsReducer,
});

export default rootReducer;
