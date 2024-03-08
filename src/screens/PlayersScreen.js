import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Player from "../components/Player";
import { getPlayers } from "../actions/getActions";

import transformedArray from "../utils/transformToArray";

const PlayersScreen = () => {
  const players = getPlayers().payload;
  const [playerNameArray, setPlayerNameArray] = useState(Object.keys(players));
  const [position, setPosition] = useState("All");

  useEffect(() => {
    if (position != "All") {
      let array = transformedArray(position);
      setPlayerNameArray(array);
    } else {
      setPlayerNameArray(Object.keys(players));
    }
  }, [position]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Players</Text>
      </View>

      <View style={styles.subHeaderContainer}>
        <Pressable
          onPress={() => setPosition("All")}
          style={
            position === "All"
              ? [styles.buttonContainer, styles.All, styles.selected]
              : [styles.buttonContainer, styles.All]
          }
        >
          <Text>All</Text>
        </Pressable>

        <Pressable
          onPress={() => setPosition("QB")}
          style={
            position === "QB"
              ? [styles.buttonContainer, styles.selected]
              : [styles.buttonContainer]
          }
        >
          <Text>QB</Text>
        </Pressable>

        <Pressable
          onPress={() => setPosition("RB")}
          style={
            position === "RB"
              ? [styles.buttonContainer, styles.selected]
              : [styles.buttonContainer]
          }
        >
          <Text>RB</Text>
        </Pressable>

        <Pressable
          onPress={() => setPosition("WR")}
          style={
            position === "WR"
              ? [styles.buttonContainer, styles.selected]
              : [styles.buttonContainer]
          }
        >
          <Text>WR</Text>
        </Pressable>

        <Pressable
          onPress={() => setPosition("TE")}
          style={
            position === "TE"
              ? [styles.buttonContainer, styles.TE, styles.selected]
              : [styles.buttonContainer, styles.TE]
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
    paddingTop: 24,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    backgroundColor: "#122d42",
  },
  subHeaderContainer: {
    flex: 0,
    padding: 10,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
  },
  headerText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#30D5C8",
  },
});
