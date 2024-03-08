import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  Image,
} from "react-native";
import React, { useState } from "react";
import Player from "../components/Player";
import { getTeam } from "../actions/getActions";
import filterAndSortPlayers from "../utils/filterAndSortPlayers";

const TeamScreen = ({ route }) => {
  const { leagueId, leagueName, teamId, teamName, avatar } = route.params;
  const [team, setTeam] = useState(
    getTeam(leagueId, leagueName, teamId).payload
  );

  const DATA = [
    {
      title: "QB",
      data: filterAndSortPlayers(team["rosterWithNames"], "QB"),
    },
    {
      title: "RB",
      data: filterAndSortPlayers(team["rosterWithNames"], "RB"),
    },
    {
      title: "WR",
      data: filterAndSortPlayers(team["rosterWithNames"], "WR"),
    },
    {
      title: "TE",
      data: filterAndSortPlayers(team["rosterWithNames"], "TE"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Avatar, Team, Rank */}
      <View
        testID="nameAvatarContainer"
        style={[
          styles.headerContainer,
          styles.rowContainer,
          styles.spaceEvenly,
        ]}
      >
        <View testID="avatarView">
          <Image
            source={{
              uri: `https://sleepercdn.com/avatars/thumbs/${team.avatar}`,
            }}
            style={styles.avatar}
            testID="ownerAvatar"
          />
        </View>

        <View testID="teamNameView" style={styles.columnContainer}>
          <Text testID="teamName" style={[styles.headerColor, styles.teamName]}>
            {teamName}
          </Text>
          <Text
            testID="teamOwner"
            style={[styles.headerColor, styles.teamOwner]}
          >
            {team.displayName}
          </Text>
        </View>

        <View testID="rankView" style={styles.columnContainer}>
          <Text
            testID="rankTitle"
            style={[styles.headerColor, styles.teamName]}
          >
            Rank
          </Text>
          <Text
            testID="rankNumber"
            style={[styles.headerColor, styles.teamOwner]}
          >
            {team.rank}
          </Text>
        </View>
      </View>

      <View
        testID="statsMovesView"
        style={[styles.infoContainer, styles.columnContainer]}
      >
        <View testID="summaryRow" style={[styles.rowContainer]}>
          <Text
            testID="summaryTitle"
            style={[
              styles.summaryFont,
              // styles.statsTitleFont,
              styles.summaryLeftMargin,
            ]}
          >
            Summary
          </Text>
        </View>

        <View testID="statsRow" style={styles.rowContainer}>
          {/* Left */}
          <View
            testID="leftContainer"
            style={[styles.columnContainer, styles.movesContainer]}
          >
            <View testID="recordView" style={styles.columnContainer}>
              <Text
                testID="recordTile"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Record
              </Text>
              <Text testID="recordNumbers" style={styles.statsColor}>
                {team.wins}-{team.losses}-{team.ties}
              </Text>
            </View>

            <View testID="budgetUsedView" style={styles.columnContainer}>
              <Text
                testID="budgetTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Budget Used
              </Text>
              <Text testID="budgetUsedNumber" style={styles.statsColor}>
                {team.waiversBudgetUsed}
              </Text>
            </View>
          </View>

          {/* Middle */}
          <View
            testID="middleContainer"
            style={[styles.columnContainer, styles.movesContainer]}
          >
            <View
              testID="pointsForView"
              style={[styles.columnContainer, styles.marginLeft]}
            >
              <Text
                testID="pointsForTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Points For
              </Text>
              <Text testID="pointsForNumber" style={styles.statsColor}>
                {team.pointsFor}
              </Text>
            </View>

            <View
              testID="draftPicksView"
              style={[styles.columnContainer, styles.marginLeft]}
            >
              <Text
                testID="draftPicksTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Draft Picks
              </Text>
              <Text testID="draftPicksNumber" style={styles.statsColor}>
                Picks go here
              </Text>
            </View>
          </View>

          {/* Right */}
          <View
            testID="rightContainer"
            style={[styles.columnContainer, styles.movesContainer]}
          >
            <View
              testID="pointsAgainstView"
              style={[styles.columnContainer, styles.marginLeft]}
            >
              <Text
                testID="pointsAgainstTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Points Ag.
              </Text>
              <Text testID="pointsAgainstNumber" style={styles.statsColor}>
                {team.pointsAgainst}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* roster */}
      <View style={styles.rosterContainer}>
        <SafeAreaView>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, index }) => (
              <Player
                key={index}
                playerName={item.name}
                grade={item.overallGrade.grade.letter}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={[styles.positionHeader, styles.statsTitleFont]}>
                {title}
              </Text>
            )}
          ></SectionList>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnContainer: {
    flex: 0,
    flexDirection: "column",
  },
  rowContainer: {
    flex: 0,
    flexDirection: "row",
  },
  headerContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: "#122d42",
  },
  positionHeader: {
    fontSize: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 700,
  },
  teamOwner: {
    fontSize: 14,
    fontWeight: 500,
  },
  headerColor: {
    color: "white",
  },
  infoContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  movesContainer: {
    padding: 10,
    justifyContent: "flex-start",
  },
  statsTitleFont: {
    color: "#454545",
    fontSize: 15,
    fontWeight: 700,
  },
  statsFont: {
    fontSize: 14,
    fontWeight: 400,
  },
  statsColor: {
    color: "#5c5c5c",
    marginBottom: 5,
  },
  rosterContainer: {
    flex: 10,
    padding: 10,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
  },
  marginLeft: {
    marginLeft: 5,
  },
  summaryFont: {
    color: "#454545",
    fontSize: 17,
    fontWeight: "bold",
  },
  summaryLeftMargin: {
    marginLeft: 10,
  },
  spaceEvenly: {
    flex: 0,
    justifyContent: "space-evenly",
  },
});

export default TeamScreen;
