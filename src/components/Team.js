import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Team = ({ teamName, id }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => navigation.navigate("Team", { id, teamName })}
      >
        <Text style={styles.team}>Team Avatar</Text>
        <Text style={styles.team}>{teamName}</Text>
      </Pressable>
    </View>
  );
};

export default Team;

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
  team: {
    flex: 1,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
    width: "100%",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
