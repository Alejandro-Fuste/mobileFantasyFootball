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
  console.log(filterAndSortPlayers(team["rosterWithNames"], "QB"));

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

        <Player playerName="One" />
        <Player playerName="Two" />
        <Player playerName="Three" />

        <Text> Additional players 👇🏼 👇🏼 👇🏼</Text>
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
