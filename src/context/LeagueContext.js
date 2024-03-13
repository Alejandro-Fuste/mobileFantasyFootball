import createDataContext from "./createDataContext";
// import leagueReducer from "../reducers/leagueReducer";
import { setLeagueName } from "../actions/leagueActions";
import { SET_LEAGUE_NAME } from "../actions/types";

const initialState = {
  leagues: [],
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
