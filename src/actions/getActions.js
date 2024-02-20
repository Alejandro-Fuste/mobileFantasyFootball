import data from "../../data/database.json";
import { GET_LEAGUES, GET_LEAGUE, GET_TEAM, GET_PLAYERS } from "./types";

export const getLeagues = () => {
  return {
    type: GET_LEAGUES,
    payload: data["leagues"],
  };
};

export const getLeague = (leagueName) => {
  return {
    type: GET_LEAGUE,
    payload: data["leagues"][leagueName],
  };
};

export const getTeam = (leagueName, teamName) => {
  return {
    type: GET_TEAM,
    payload: data["leagues"][leagueName][teamName],
  };
};

export const getPlayers = () => {
  return {
    type: GET_PLAYERS,
    payload: data["players"],
  };
};
