import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>Logo</Text>
        <Text style={styles.logo}>Title</Text>
      </View>

      <Text>HomeScreen - Display leagues here</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  headerContainer: {
    padding: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
