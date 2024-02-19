import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

const PlayerContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.subHeader1Container}>
          <Text>Player Pic</Text>
          <Text>Player Name</Text>
        </View>

        <View style={styles.subHeader2Container}>
          <Text>Position</Text>
          <Text>Team</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text>
            PlayerScreen - Display player info...use Flatlist to dipslay all
            info
          </Text>
          <View>
            <Text>Overall Info</Text>
          </View>

          <View>
            <Text>Production Info</Text>
          </View>

          <View>
            <Text>Opportunity Info</Text>
          </View>

          <View>
            <Text>Offense Info</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  headerContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "steelblue",
    justifyContent: "center",
  },
  subHeader1Container: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  subHeader2Container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  contentContainer: {
    flex: 10,
    padding: 10,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});