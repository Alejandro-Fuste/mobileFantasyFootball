import data from "../../data/database.json";
import {
  GET_LEAGUES,
  GET_LEAGUE,
  GET_TEAM,
  GET_PLAYERS,
  GET_PLAYER,
} from "./types";

export const getLeagues = () => {
  return {
    type: GET_LEAGUES,
    payload: data["leagues"],
  };
};

export const getLeague = (id) => {
  return {
    type: GET_LEAGUE,
    payload: data["leagues"][id],
  };
};

export const getTeam = (leagueId, leagueName, teamId) => {
  return {
    type: GET_TEAM,
    payload: data["leagues"][leagueId][leagueName][teamId],
  };
};

export const getPlayers = () => {
  return {
    type: GET_PLAYERS,
    payload: data["players"],
  };
};

export const getPlayer = (name) => {
  return {
    type: GET_PLAYER,
    payload: data["players"][name],
  };
};
