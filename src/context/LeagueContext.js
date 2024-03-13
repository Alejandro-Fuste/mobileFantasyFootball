import createDataContext from "./createDataContext";
import { SET_LEAGUE_NAME } from "../actions/types";
import { setLeagueName } from "../actions/leagueActions";
import { getLeagues } from "../actions/getActions";

const initialState = {
  leagues: getLeagues().payload,
  leagueName: "",
};

const leagueReducer = (state = initialState, action) => {
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

export const { Context, Provider } = createDataContext(
  leagueReducer,
  { setLeagueName },
  initialState
);
