import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Player = ({ id, playerName }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.contentContainer}
        onPress={() =>
          navigation.navigate("Player", { sampleID: id, playerName })
        }
      >
        <Text style={styles.player}>Player Avatar</Text>
        <Text style={styles.player}>Player Name: {playerName}</Text>
      </Pressable>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    flexDirection: "row",
    margin: 10,
    padding: 0,
    backgroundColor: "black",
    alignItems: "center",
    borderColor: "#ffffff",
    borderRadius: 5,
    width: "85%",
  },
  player: {
    flex: 1,
    margin: 10,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#ffffff",
  },
});
