import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import Player from "../components/Player";
import { getPlayers } from "../actions/getActions";

const PlayersScreen = () => {
  const [players, setPlayers] = useState(getPlayers().payload);
  const playerNameArray = Object.keys(players);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Players Page</Text>
      </View>

      <View style={styles.subHeaderContainer}>
        <Text>Button group to filter players by position</Text>
      </View>

      <View style={styles.contentContainer}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={playerNameArray}
            renderItem={({ item }) => <Player playerName={item} />}
            keyExtractor={(item) => item}
          />
        </SafeAreaView>
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
