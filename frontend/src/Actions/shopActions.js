import {
  LIKE_SHOP,
  REMOVE_SHOP,
  LOAD_ALL_SHOPS,
  LOAD_PREFERRED_SHOPS,
} from "./types";
import axios from "axios";

export const loadAllShops = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/shop/allShop", {
      mode: "cors",
      headers: {
        contentType: "application/json",
        Accept: "application/json",
      },
    });

    dispatch({
      type: LOAD_ALL_SHOPS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const loadPreferredShops = () => async (dispatch) => {
  const USER_ID = localStorage.getItem("userID");
  console.log(USER_ID);
  try {
    const res = await axios(
      `http://localhost:5000/shop/preferredShop/${USER_ID}`,
      {
        mode: "cors",
        headers: {
          contentType: "application/json",
          Accept: "application/json",
        },
      }
    );
    dispatch({
      type: LOAD_PREFERRED_SHOPS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};
