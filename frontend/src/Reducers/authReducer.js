import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "../Actions/types";
export const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  errors: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case SIGNUP_FAILURE:
      return {
        errors: payload,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
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
