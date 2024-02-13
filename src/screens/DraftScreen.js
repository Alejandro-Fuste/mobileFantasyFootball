import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DraftScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DraftScreen</Text>
    </View>
  );
};

export default DraftScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
