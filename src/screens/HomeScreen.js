import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import League from "../components/League";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>Logo</Text>
        <Text style={styles.logo}>Title</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text>HomeScreen - Display leagues here</Text>
        <League />
        <League />
        <League />
      </View>
    </View>
  );
};

export default HomeScreen;

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
  logo: {
    width: 66,
    height: 58,
  },
  contentContainer: {
    flex: 10,
    padding: 10,
    backgroundColor: "skyblue",
    alignItems: "center",
  },
});
