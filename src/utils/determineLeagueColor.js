function determineLeagueColor(index) {
  if (index === 0) {
    return "#3E7199";
  } else if (index % 2 == 0) {
    return "#FFFFFF";
  } else {
    return "#66DCD7";
  }
}

export default determineLeagueColor;
