import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Team = ({ teamName, id }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.contentContainer}
        onPress={() => navigation.navigate("Team", { sampleID: id, teamName })}
      >
        <Text style={styles.team}>Team Avatar</Text>
        <Text style={styles.team}>Team Name: {teamName}</Text>
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
    margin: 10,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#ffffff",
  },
});
