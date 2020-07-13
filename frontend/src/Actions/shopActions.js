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
