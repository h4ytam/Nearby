import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../Actions/types";
export const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  errors: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        user: payload,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        errors: payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
