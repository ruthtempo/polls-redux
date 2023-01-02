import { SAVE_ANSWER } from "../actions/questions";
import { RECEIVE_USERS_DATA } from "../actions/users";

export default function users(state = null, action) {
  switch (action.type) {
    case RECEIVE_USERS_DATA:
      return action.users;
    case SAVE_ANSWER:
      const authedUser = action.authedUser;
      const qid = action.qid;
      const answer = action.answer;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}
