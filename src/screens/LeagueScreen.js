import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const LeagueScreen = ({ route }) => {
  const { sampleID } = route.params;
  return (
    <View style={styles.container}>
      <Text>
        LeagueScreen {JSON.stringify(sampleID)} - Display teams from the
        particular league
      </Text>
    </View>
  );
};

export default LeagueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
