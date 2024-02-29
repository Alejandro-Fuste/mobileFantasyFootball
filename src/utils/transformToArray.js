import { getPlayers } from "../actions/getActions";
import filterAndSortPlayers from "./filterAndSortPlayers";

const transformToArray = (position) => {
  const players = getPlayers().payload;
  const array = [];

  for (const property in players) {
    array.push(players[property]);
  }

  const filteredArray = () => filterAndSortPlayers(array, position);

  const namesArray = filteredArray().map((c) => c.name);

  return namesArray;
};

export default transformToArray;
