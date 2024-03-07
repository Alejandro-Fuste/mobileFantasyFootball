import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import Team from "../components/Team";
import { getLeague } from "../actions/getActions";

const LeagueScreen = ({ route }) => {
  const { id, leagueName } = route.params;
  const [teams, setTeams] = useState(getLeague(id).payload);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* <Text>{leagueName}</Text> */}
        <Text style={styles.teamsText}>Teams</Text>
      </View>

      <View style={styles.contentContainer}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={teams[leagueName]}
            renderItem={({ item, index }) => (
              <Team
                key={index}
                leagueName={leagueName}
                leagueId={id}
                teamId={index}
                teamName={item.teamName}
                avatar={item.avatar}
              />
            )}
            keyExtractor={(item) => item.ownerId}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default LeagueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#122d42",
    padding: 10,
  },
  headerContainer: {
    flex: 0,
    marginRight: 5,
    marginLeft: 5,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  teamsText: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "left",
  },
  contentContainer: {
    flex: 10,
    padding: 10,
    alignItems: "center",
  },
});
