import { SAVE_ANSWER, SAVE_NEW_QUESTION } from "../actions/questions";
import { RECEIVE_USERS_DATA } from "../actions/users";

export function users(state = null, action) {
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
    case SAVE_NEW_QUESTION:
      const question = action.question;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [...state[question.author].questions, question.id],
        },
      };
    default:
      return state;
  }
}
