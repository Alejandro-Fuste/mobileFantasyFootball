import { StyleSheet, Text, View } from "react-native";
import React from "react";

const League = () => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.league}>League Avatar</Text>
      <Text style={styles.league}>League Name</Text>
    </View>
  );
};

export default League;

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
  league: {
    flex: 1,
    margin: 10,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#ffffff",
  },
});
