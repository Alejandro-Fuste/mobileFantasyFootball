import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const League = ({ id, leagueName }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => navigation.navigate("League", { id, leagueName })}
      >
        <Text style={styles.league}>League Avatar</Text>
        <Text style={styles.league}>{leagueName}</Text>
      </Pressable>
    </View>
  );
};

export default League;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    flexDirection: "row",
    margin: 10,
    padding: 0,
    backgroundColor: "black",
    alignItems: "center",
    borderColor: "#ffffff",
    borderRadius: 5,
    width: "85%",
  },
  league: {
    flex: 1,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
    width: "100%",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
