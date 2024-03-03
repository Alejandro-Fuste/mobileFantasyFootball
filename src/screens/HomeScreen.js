import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import League from "../components/League";
import { getLeagues } from "../actions/getActions";

const HomeScreen = () => {
  const [leagues, setLeagues] = useState(getLeagues().payload);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image src={"assets/logo.png"} />
      </View>

      <View style={styles.contentContainer}>
        {leagues.map((c, i) => {
          return (
            <League key={i} id={i} leagueName={Object.keys(leagues[i])[0]} />
          );
        })}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#122d42",
  },
  headerContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  logo: {
    width: 66,
    height: 58,
  },
  contentContainer: {
    flex: 10,
    padding: 10,
    alignItems: "center",
  },
});
