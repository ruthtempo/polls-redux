import * as API from "../_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS_DATA = "RECEIVE_QUESTIONS_DATA";
export const SAVE_ANSWER = "SAVE_ANSWER";

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

const saveAnswer = (authedUser, qid, answer) => {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
  };
};

export const handleSaveAnswer = (authedUser, qid, answer) => {
  return (dispatch) => {
    return API._saveQuestionAnswer({ authedUser, qid, answer }).then(() =>
      dispatch(saveAnswer(authedUser, qid, answer))
    );
  };
};
