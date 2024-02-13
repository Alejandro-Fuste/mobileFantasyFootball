import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import TeamScreen from "./TeamScreen";

const Stack = createNativeStackNavigator();

const LeagueScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LeagueScreen - Display teams from the particular league</Text>

      {/* <Button
        title="Go to team page"
        onPress={() => navigation.navigate("Team")}
      /> */}
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
