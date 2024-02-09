import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const LeagueScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LeagueScreen</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to team page"
        onPress={() => navigation.navigate("Team")}
      />
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
