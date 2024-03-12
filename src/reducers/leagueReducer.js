import { SET_LEAGUE_NAME } from "../actions/types";

const initialState = {
  league_name: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LEAGUE_NAME:
      return {
        ...state,
        league_name: action.payload,
        user: action.payload,
      };
    default:
      return state;
  }
}
