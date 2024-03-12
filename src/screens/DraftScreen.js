import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DraftScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Draft</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text>Coming soon!</Text>
      </View>
    </View>
  );
};

export default DraftScreen;

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
  headerText: {
    fontWeight: "600",
    fontSize: 18,
    color: "#30D5C8",
  },
  contentContainer: {
    flex: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
