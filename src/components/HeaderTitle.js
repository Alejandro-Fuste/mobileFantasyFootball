import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/LeagueContext";

const LogoHeader = () => {
  const { state } = useContext(Context);
  const { leagueName } = state;

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{leagueName}</Text>
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "#30D5C8",
    fontSize: 18,
    fontWeight: "bold",
  },
});
