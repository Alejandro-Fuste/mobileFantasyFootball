import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import League from "../components/League";
import { getLeagues } from "../actions/getActions";
import Logo from "../../assets/Logo.svg";
import { useFonts } from "expo-font";

const HomeScreen = () => {
  const [leagues, setLeagues] = useState(getLeagues().payload);
  const [fontsLoaded] = useFonts({
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Medium.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, styles.paddingBottom]}>
        <Logo width="100%" height="100%" />
      </View>

      <View>
        <Text style={[styles.leagueFont, styles.paddingBottom]}>Leagues</Text>
        <Text style={[styles.instructionFont, styles.paddingBottom]}>
          Click on a league to continue
        </Text>
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
    padding: 10,
  },
  headerContainer: {
    flex: 1,
    position: "relative",
    top: -10,
    left: -65,
  },
  logo: {
    width: 66,
    height: 58,
  },
  leagueFont: {
    fontFamily: "Roboto-Condensed",
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  instructionFont: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "white",
  },
  contentContainer: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  paddingBottom: {
    paddingBottom: 10,
  },
});
