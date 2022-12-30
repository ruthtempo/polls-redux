export const SET_AUTHED_USER = "SET_AUTHED_USER";

export default function setAuthedUser(userId) {
  return {
    type: SET_AUTHED_USER,
    userId,
  };
}
