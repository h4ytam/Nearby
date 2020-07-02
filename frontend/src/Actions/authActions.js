import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
} from "./types";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await axios.post("http://localhost:5000/user/login", body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data;
    dispatch({
      type: LOGIN_FAILURE,
      payload: errors,
    });
  }
};
export const register = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await axios.post("http://localhost:5000/user/signup", body);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data;
    dispatch({
      type: SIGNUP_FAILURE,
      payload: errors,
    });
  }
};
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
