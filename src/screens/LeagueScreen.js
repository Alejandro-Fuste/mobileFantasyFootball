import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Team from "../components/Team";
import { getLeague } from "../actions/getActions";

const LeagueScreen = ({ route }) => {
  const { id, leagueName } = route.params;
  const [teams, setTeams] = useState(getLeague(id).payload);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>League Avatar</Text>
        <Text>{leagueName}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text>
          LeagueScreen {JSON.stringify(id)} - Display teams from the particular
          league. Use Flatlist to dipslay all teams
        </Text>

        {teams[leagueName].map((c, i) => {
          return (
            <Team
              key={i}
              leagueName={leagueName}
              leagueId={id}
              teamId={i}
              teamName={c.teamName}
            />
          );
        })}
      </View>
    </View>
  );
};

export default LeagueScreen;

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
