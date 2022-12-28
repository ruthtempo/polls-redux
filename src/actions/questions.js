import * as API from "../_DATA";

export const RECEIVE_QUESTIONS_DATA = "RECEIVE_QUESTIONS_DATA";

const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS_DATA,
    questions,
  };
};

export const handleInitialQuestionsData = () => {
  return (dispatch) => {
    return API._getQuestions().then((questions) =>
      dispatch(receiveQuestions(questions))
    );
  };
};
