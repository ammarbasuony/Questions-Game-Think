import {
  SET_PLAYER_NAME,
  SET_DIFFICULTY,
  SET_SESSION_TOKEN,
  SET_PLAYER_CATEGORY,
  START_NEW_GAME,
} from "../types";

const initialState = {
  player_name: "",
  difficulty: "",
  session_token: "",
  category: "",
  selectedCategories: [],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER_NAME:
      return {
        ...state,
        player_name: action.payload,
      };
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case SET_SESSION_TOKEN:
      return {
        ...state,
        session_token: action.payload,
      };
    case SET_PLAYER_CATEGORY:
      return {
        ...state,
        category: action.payload,
        selectedCategories: [...state.selectedCategories, action.payload],
      };

    case START_NEW_GAME:
      return initialState;
    default:
      return state;
  }
};

export default playerReducer;
