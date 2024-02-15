import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const TeamScreen = ({ route }) => {
  const { sampleID, teamName } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Team Avatar</Text>
        <Text>Team Name: {teamName}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text>Stats content</Text>

        <Text>
          TeamScreen {JSON.stringify(sampleID)} - Display players from the
          particular team. Use Flatlist to dipslay all players
        </Text>
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
