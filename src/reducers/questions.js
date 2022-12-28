import { RECEIVE_QUESTIONS_DATA } from "../actions/questions";

export default function questions(state = null, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS_DATA:
      return action.questions;
  }
  return state;
}
