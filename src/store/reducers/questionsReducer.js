import {
  SET_NUMBER_OF_QUESTIONS,
  SET_NUMBER_OF_CORRECT_ANSWERS,
  SET_NUMBER_OF_WRONG_ANSWERS,
  SET_NUMBER_OF_SKIPPED_QUESTIONS,
  SET_NUMBER_OF_CATEGORIES,
  SET_TOTAL_TIME_SPENT,
  SET_RESET_STATE,
  START_NEW_GAME,
} from "../types";

const initialState = {
  number_of_questions: 0,
  number_of_correct_answers: 0,
  number_of_wrong_answers: 0,
  number_of_skipped_questions: 0,
  number_of_categories: 0,
  total_time_spent: 0,
  total_of_correct_answers: 0,
  total_of_wrong_answers: 0,
  total_of_skipped_questions: 0,
};
const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER_OF_QUESTIONS:
      return {
        ...state,
        number_of_questions: state.number_of_questions + 1,
      };
    case SET_NUMBER_OF_CORRECT_ANSWERS:
      return {
        ...state,
        number_of_correct_answers: state.number_of_correct_answers + 1,
        total_of_correct_answers: state.total_of_correct_answers + 1,
      };
    case SET_NUMBER_OF_WRONG_ANSWERS:
      return {
        ...state,
        number_of_wrong_answers: state.number_of_wrong_answers + 1,
        total_of_wrong_answers: state.total_of_wrong_answers + 1,
      };
    case SET_NUMBER_OF_SKIPPED_QUESTIONS:
      return {
        ...state,
        number_of_skipped_questions: state.number_of_skipped_questions + 1,
        total_of_skipped_questions: state.total_of_skipped_questions + 1,
      };
    case SET_NUMBER_OF_CATEGORIES:
      return {
        ...state,
        number_of_categories: state.number_of_categories + 1,
      };
    case SET_TOTAL_TIME_SPENT:
      return {
        ...state,
        total_time_spent: state.total_time_spent + action.payload,
      };
    case SET_RESET_STATE:
      return {
        ...state,
        number_of_questions: 0,
        number_of_correct_answers: 0,
        number_of_wrong_answers: 0,
        number_of_skipped_questions: 0,
        number_of_categories: state.number_of_categories + 1,
      };
    case START_NEW_GAME:
      return initialState;
    default:
      return state;
  }
};

export default questionsReducer;
