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
    case LOAD_PREFERRED_SHOPS:
      return {
        ...state,
        preferredShops: action.payload,
      };
    case LIKE_SHOP: {
      let { preferredShops } = state;
      const newPreferredShops = preferredShops.filter(
        (item) => item !== action.payload
      );
      return {
        ...state,
        preferredShops: newPreferredShops,
      };
    }
    case REMOVE_SHOP: {
      let { preferredShops } = state;
      const newPreferredShops = preferredShops.filter(
        (item) => item !== action.payload
      );
      console.log(newPreferredShops);
      return {
        ...state,
        preferredShops: newPreferredShops,
      };
    }
    default:
      return state;
  }
}
