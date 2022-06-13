import {
  SET_PLAYER_NAME,
  SET_DIFFICULTY,
  SET_SESSION_TOKEN,
  SET_PLAYER_CATEGORY,
  SET_NUMBER_OF_QUESTIONS,
  SET_NUMBER_OF_CORRECT_ANSWERS,
  SET_NUMBER_OF_WRONG_ANSWERS,
  SET_NUMBER_OF_SKIPPED_QUESTIONS,
  SET_NUMBER_OF_CATEGORIES,
  SET_TOTAL_TIME_SPENT,
  SET_RESET_STATE,
  START_NEW_GAME,
} from "./types";

export const startNewGame = () => {
  return {
    type: START_NEW_GAME,
  };
};

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

// Questions
export const addNumberOfQuestions = (payload) => {
  return {
    type: SET_NUMBER_OF_QUESTIONS,
    payload,
  };
};

export const addNumberOfCorrectAnswers = (payload) => {
  return {
    type: SET_NUMBER_OF_CORRECT_ANSWERS,
    payload,
  };
};

export const addNumberOfWrongAnswers = (payload) => {
  return {
    type: SET_NUMBER_OF_WRONG_ANSWERS,
    payload,
  };
};

export const addNumberOfSkippedQuestions = (payload) => {
  return {
    type: SET_NUMBER_OF_SKIPPED_QUESTIONS,
    payload,
  };
};

export const addNumberOfCategories = (payload) => {
  return {
    type: SET_NUMBER_OF_CATEGORIES,
    payload,
  };
};

export const addTotalTimeSpent = (payload) => {
  return {
    type: SET_TOTAL_TIME_SPENT,
    payload,
  };
};

export const addResetState = (payload) => {
  return {
    type: SET_RESET_STATE,
    payload,
  };
};
