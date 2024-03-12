import { SET_LEAGUE_NAME } from "./types";

export const setLeagueName = (name) => {
  return {
    type: SET_LEAGUE_NAME,
    payload: name,
  };
};
