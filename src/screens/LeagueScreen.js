import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Team from "../components/Team";

const LeagueScreen = ({ route }) => {
  const { sampleID } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>League Avatar</Text>
        <Text>League Name</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text>
          LeagueScreen {JSON.stringify(sampleID)} - Display teams from the
          particular league. Use Flatlist to dipslay all teams
        </Text>

        <Team teamName="One" id="1" />
        <Team teamName="Two" id="2" />
        <Team teamName="Three" id="3" />

        <Text> Additional teams 👇🏼 👇🏼 👇🏼</Text>
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
