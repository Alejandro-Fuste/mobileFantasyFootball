import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import determineLeagueColor from "../utils/determineLeagueColor";
import { useFonts } from "expo-font";
import FootballSVG from "../../assets/american-football.svg";

const League = ({ id, leagueName }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Roboto-Flex": require("../../assets/fonts/RobotoFlex-Regular.ttf"),
  });

  return (
    <View>
      <Pressable
        style={[styles(id).button, styles(id).buttonOpen]}
        onPress={() => navigation.navigate("League", { id, leagueName })}
      >
        <Text style={[styles(id).league, styles(id).leagueNameFont]}>
          {leagueName}
        </Text>

        <FootballSVG width="20%" height="20%" style={styles.footballIcon} />
      </Pressable>
    </View>
  );
};

export default League;

const styles = (id) =>
  StyleSheet.create({
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
      height: 114,
      width: "100%",
    },
    buttonOpen: {
      backgroundColor: determineLeagueColor(id),
      flex: 0,
      flexDirection: "row",
    },
    leagueNameFont: {
      fontFamily: "Roboto-Flex",
      fontSize: 14,
      fontWeight: "700",
      color: "#122d42",
    },
  });
