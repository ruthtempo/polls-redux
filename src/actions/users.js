import * as API from "../_DATA";

export const RECEIVE_USERS_DATA = "RECEIVE_USERS_DATA";

const receiveData = (users) => {
  return {
    type: RECEIVE_USERS_DATA,
    users,
  };
};

export const handleInitialUsersData = () => {
  return (dispatch) => {
    return API._getUsers().then((users) => {
      dispatch(receiveData(users));
    });
  };
};
