import {
  SET_PLAYER_NAME,
  SET_DIFFICULTY,
  SET_SESSION_TOKEN,
  SET_PLAYER_CATEGORY,
} from "./types";

// Player
export const addPlayerName = (payload) => {
  return {
    type: SET_PLAYER_NAME,
    payload,
  };
};

export const addDifficulty = (payload) => {
  return {
    type: SET_DIFFICULTY,
    payload,
  };
};

export const addSessionToken = (payload) => {
  return {
    type: SET_SESSION_TOKEN,
    payload,
  };
};

export const addPlayerCategory = (payload) => {
  return {
    type: SET_PLAYER_CATEGORY,
    payload,
  };
};
