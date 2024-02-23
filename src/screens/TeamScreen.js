import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from "react-native";
import React, { useState } from "react";
import Player from "../components/Player";
import { getTeam } from "../actions/getActions";
import filterAndSortPlayers from "../utils/filterAndSortPlayers";

const TeamScreen = ({ route }) => {
  const { leagueId, leagueName, teamId, teamName } = route.params;
  const [team, setTeam] = useState(
    getTeam(leagueId, leagueName, teamId).payload
  );

  const DATA = [
    {
      title: "QB",
      data: filterAndSortPlayers(team["rosterWithNames"], "QB"),
    },
    {
      title: "RB",
      data: filterAndSortPlayers(team["rosterWithNames"], "RB"),
    },
    {
      title: "WR",
      data: filterAndSortPlayers(team["rosterWithNames"], "WR"),
    },
    {
      title: "TE",
      data: filterAndSortPlayers(team["rosterWithNames"], "TE"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Team Avatar</Text>
        <Text>{teamName}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text>Stats content</Text>

        <SafeAreaView>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, index }) => (
              <Player
                key={index}
                playerName={item.name}
                grade={item.overallGrade.grade.letter}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          ></SectionList>
        </SafeAreaView>
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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
  },
  header: {
    fontSize: 12,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 10,
  },
});

export default TeamScreen;
