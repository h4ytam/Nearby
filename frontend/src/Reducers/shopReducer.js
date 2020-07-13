import {
  LIKE_SHOP,
  REMOVE_SHOP,
  LOAD_ALL_SHOPS,
  LOAD_PREFERRED_SHOPS,
} from "../Actions/types";

const initialState = {
  shops: [],
  preferredShops: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ALL_SHOPS:
      return {
        ...state,
        shops: action.payload,
      };
    default:
      return state;
  }
}
