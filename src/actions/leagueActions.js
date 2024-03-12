import { SET_LEAGUE_NAME } from "./types";

export const setLeagueName = (dispatch, name) => {
  return () => {
    dispatch({ type: SET_LEAGUE_NAME, payload: name });
  };
};
