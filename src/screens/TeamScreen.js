import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const TeamScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Team screen - Display owner and players info</Text>

      {/* <Button
        title="Go to league screen"
        onPress={() => navigation.navigate("League")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TeamScreen;
