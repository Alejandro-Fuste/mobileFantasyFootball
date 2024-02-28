import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Player from "../components/Player";
import { getPlayers } from "../actions/getActions";
import filterAndSortPlayers from "../utils/filterAndSortPlayers";

const PlayersScreen = () => {
  const [players, setPlayers] = useState(getPlayers().payload);
  const playerNameArray = Object.keys(players);
  const [position, setPosition] = useState("All");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Players Page</Text>
      </View>

      <View style={styles.subHeaderContainer}>
        <Pressable
          onPress={() => setPosition("All")}
          style={
            position === "All"
              ? [
                  styles.buttonContainer,
                  styles.button,
                  styles.All,
                  styles.selected,
                ]
              : [styles.buttonContainer, styles.All, styles.button]
          }
        >
          <Text>All</Text>
        </Pressable>

        <Pressable
          onPress={() => setPosition("QB")}
          style={
            position === "QB"
              ? [styles.buttonContainer, styles.button, styles.selected]
              : [styles.buttonContainer, styles.button]
          }
        >
          <Text>QB</Text>
        </Pressable>

        <Pressable
          onPress={() => setPosition("RB")}
          style={
            position === "RB"
              ? [styles.buttonContainer, styles.button, styles.selected]
              : [styles.buttonContainer, styles.button]
          }
        >
          <Text>RB</Text>
        </Pressable>

        <Pressable
          onPress={() => setPosition("WR")}
          style={
            position === "WR"
              ? [styles.buttonContainer, styles.button, styles.selected]
              : [styles.buttonContainer, styles.button]
          }
        >
          <Text>WR</Text>
        </Pressable>

        <Pressable
          onPress={() => setPosition("TE")}
          style={
            position === "TE"
              ? [
                  styles.buttonContainer,
                  styles.button,
                  styles.TE,
                  styles.selected,
                ]
              : [styles.buttonContainer, styles.TE, styles.button]
          }
        >
          <Text>TE</Text>
        </Pressable>
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
    flex: 0,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "steelblue",
  },
  buttonContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRightWidth: 1,
    borderRightColor: "gray",
  },
  selected: {
    backgroundColor: "white",
  },
  All: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  TE: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentContainer: {
    flex: 10,
    padding: 10,
    backgroundColor: "skyblue",
    alignItems: "center",
  },
});
