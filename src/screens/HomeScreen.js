import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import League from "../components/League";
import { getLeagues } from "../actions/getActions";
import Logo from "../../assets/Logo.svg";

const HomeScreen = () => {
  const [leagues, setLeagues] = useState(getLeagues().payload);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Logo width="100%" height="100%" />
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
    position: "relative",
    left: -50,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
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
