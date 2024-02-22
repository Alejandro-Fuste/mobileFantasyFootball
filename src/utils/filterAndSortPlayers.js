function filterAndSortPlayers(array, position) {
  return array
    .filter((c) => c.position === position)
    .sort((a, b) => b["overallGrade"]["value"] - a["overallGrade"]["value"]);
}

export default filterAndSortPlayers;
