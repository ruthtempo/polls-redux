import { RECEIVE_USERS_DATA } from "../actions/users";

export default function users(state = null, action) {
  switch (action.type) {
    case RECEIVE_USERS_DATA:
      return action.users;
  }
  return state;
}
