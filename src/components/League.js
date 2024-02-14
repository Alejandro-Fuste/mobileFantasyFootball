import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const League = ({ id }) => {
  const navigation = useNavigation();
  console.log(id);
  return (
    <View>
      <Pressable
        style={styles.contentContainer}
        onPress={() => navigation.navigate("League", { sampleID: id })}
      >
        <Text style={styles.league}>League Avatar</Text>
        <Text style={styles.league}>League Name</Text>
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
    margin: 10,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#ffffff",
  },
});
