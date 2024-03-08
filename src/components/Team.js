import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import RightArrow from "../../assets/right-arrow.svg";

const Team = ({ teamName, teamId, leagueId, leagueName, avatar }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "#122d42",
          },
          ,
          styles.button,
          styles.buttonOpen,
        ]}
        onPress={() =>
          navigation.navigate("Team", {
            teamId,
            teamName,
            leagueId,
            leagueName,
          })
        }
      >
        <View>
          <Image
            source={{
              uri: `https://sleepercdn.com/avatars/thumbs/${avatar}`,
            }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.team}>{teamName}</Text>
        <RightArrow width="5%" height="50%" style={styles.RightArrow} />
      </Pressable>
    </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 40,
    marginBottom: 10,
  },
  team: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    marginBottom: 10,
  },
  RightArrow: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
    elevation: 2,
    width: "100%",
  },
  buttonOpen: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
