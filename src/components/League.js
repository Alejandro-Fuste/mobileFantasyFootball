import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import determineLeagueColor from "../utils/determineLeagueColor";
import { useFonts } from "expo-font";
import FootballSVG from "../../assets/american-football.svg";
import { getLeagueDetails } from "../actions/getActions";

const League = ({ id, leagueName }) => {
  const [leagueDetails, setLeagueDetails] = useState(
    getLeagueDetails(id).payload
  );
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Roboto-Flex": require("../../assets/fonts/RobotoFlex-Regular.ttf"),
  });

  return (
    <View style={styles(id).container}>
      <Pressable
        style={[styles(id).button, styles(id).buttonOpen]}
        onPress={() => navigation.navigate("League", { id, leagueName })}
      >
        <View style={styles(id).detailsContainer}>
          <Text style={[styles(id).league, styles(id).leagueNameFont]}>
            {leagueName}
          </Text>

          <FootballSVG width="50%" height="100%" />
        </View>

        <View style={styles(id).detailsContainer}>
          {leagueDetails.map((c, i) => {
            return (
              <View style={styles(id).detailTextContainer}>
                <Text style={styles(id).detailText}>{c}</Text>
              </View>
            );
          })}
        </View>
      </Pressable>
    </View>
  );
};

export default League;

const styles = (id) =>
  StyleSheet.create({
    container: {
      flex: 0,
      width: "100%",
    },
    league: {
      flex: 1,
      textAlign: "left",
    },
    button: {
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 10,
      padding: 10,
      elevation: 2,
      height: 130,
    },
    buttonOpen: {
      backgroundColor: determineLeagueColor(id),
      flex: 0,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    leagueNameFont: {
      fontFamily: "Roboto-Flex",
      fontSize: 14,
      fontWeight: "700",
      color: "#122d42",
    },
    detailsContainer: {
      flex: 0,
      flexDirection: "row",
    },
    detailTextContainer: {
      backgroundColor: "#F4FF72",
      borderRadius: 20,
      padding: 10,
      marginLeft: 5,
      marginRight: 5,
    },
    detailText: {
      fontWeight: "bold",
    },
  });
