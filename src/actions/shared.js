import API from "../_DATA";

export const RECEIVE_DATA = "RECEIVE_DATA";

const receiveData = (users, questions) => {
  return {
    type: RECEIVE_DATA,
    users,
    questions,
  };
};

export const handleInitialData = () => {
  return (dispatch) => {
    return Promise.all([API._getUsers(), API._getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveData(users, questions));
      }
    );
  };
};
