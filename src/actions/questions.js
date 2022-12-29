import * as API from "../_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS_DATA = "RECEIVE_QUESTIONS_DATA";

const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS_DATA,
    questions,
  };
};

export const handleInitialQuestionsData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return API._getQuestions().then((questions) => {
      dispatch(hideLoading());
      dispatch(receiveQuestions(questions));
    });
  };
};
