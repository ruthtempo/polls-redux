import { RECEIVE_QUESTIONS_DATA, SAVE_ANSWER } from "../actions/questions";

export default function questions(state = null, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS_DATA:
      return action.questions;
    case SAVE_ANSWER:
      const authedUser = action.authedUser;
      const qid = action.qid;
      const answer = action.answer;

      return {
        // new object
        ...state, // copy of previous state (questions)
        [qid]: {
          //update the property of the selected question. [] means the prop is dynamic
          ...state[qid], //copy of all the properties in that question
          [answer]: {
            //modification of property (optionOne or optionTwo - dynamic)
            ...state[qid][answer], // copy the whole of the option
            votes: [...state[qid][answer].votes, authedUser], // and modify this specific property, we append user to previous users that voted.
          },
        },
      };
  }
  return state;
}
