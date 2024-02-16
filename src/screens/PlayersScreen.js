import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Player2 from "../components/Player2";

const PlayersScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Players Page</Text>
      </View>

      <View style={styles.subHeaderContainer}>
        <Text>Button group to filter players by position</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text>PlayersScreen - Diplay all players here</Text>

        <Player2 playerName="Player 1" />
      </View>
    </View>
  );
};

export default PlayersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    flexDirection: "row",
    backgroundColor: "steelblue",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  subHeaderContainer: {
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
