import { SET_LEAGUE_NAME } from "./types";

export const setLeagueName = (dispatch) => {
  return (name) => {
    dispatch({ type: SET_LEAGUE_NAME, payload: name });
  };
};
