import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Player from "../components/Player";
import { getTeam } from "../actions/getActions";
import filterAndSortPlayers from "../utils/filterAndSortPlayers";

const TeamScreen = ({ route }) => {
  const { leagueId, leagueName, teamId, teamName } = route.params;
  const [team, setTeam] = useState(
    getTeam(leagueId, leagueName, teamId).payload
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Team Avatar</Text>
        <Text>{teamName}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text>Stats content</Text>

        <Text>
          TeamScreen {JSON.stringify(teamId)} - Display players from the
          particular team. Use Flatlist to dipslay all players
        </Text>

        {filterAndSortPlayers(team["rosterWithNames"], "QB").map((c, i) => {
          return (
            <Player
              key={i}
              playerName={c.name}
              grade={c.overallGrade.grade.letter}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "steelblue",
    justifyContent: "space-evenly",
  },
  contentContainer: {
    flex: 10,
    padding: 10,
    backgroundColor: "skyblue",
    alignItems: "center",
  },
});

export default TeamScreen;
