import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import League from "../components/League";
import { getLeagues } from "../actions/getActions";

const HomeScreen = () => {
  const [leagues, setLeagues] = useState(getLeagues().payload);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>Logo</Text>
        <Text style={styles.logo}>Title</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text>HomeScreen - Display leagues here</Text>

        {leagues.map((c, i) => {
          return <League key={i} leagueName={Object.keys(leagues[i])[0]} />;
        })}
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
