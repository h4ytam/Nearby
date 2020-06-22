import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await axios.post("http://localhost:5000/user/login", body);
    // const test = res.json();
    console.log(res);

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
    // console.log(errors);
  }
};
