import { SET_LEAGUE_NAME } from "../actions/types";

const initialState = {
  leagues: [],
  leagueName: "",
};

export const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAGUE_NAME:
      return {
        ...state,
        leagueName: action.payload,
      };
    default:
      return state;
  }
};
