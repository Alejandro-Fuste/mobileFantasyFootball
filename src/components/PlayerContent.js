import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import determinePositionOpportunity from "../utils/determinePositionOpportunity";

const PlayerContent = ({ data }) => {
  const {
    name,
    headShot,
    position,
    team,
    overallGrade,
    production,
    opportunity,
    offense,
  } = data;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.subHeader1Container}>
          <Image src={headShot} style={styles.headShot} />

          <View style={styles.subHeader2Container}>
            <Text>{name}</Text>
            <Text>{position}</Text>
            <Text>{team}</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text>
            PlayerScreen - Display player info...use Flatlist to dipslay all
            info
          </Text>
          <View>
            <Text>Overall Info</Text>
            <Text>
              Grade: {overallGrade.value} {overallGrade.grade.letter}
            </Text>
            <Text>Descripton: {overallGrade.grade.description}</Text>
            <Text>Overall Rank: {production.overallRank}</Text>
            <Text>Overall Percentile: {production.overallPercentile}%</Text>
          </View>

          <View>
            <Text>Offense Info</Text>
            <Text>Points Per Game: {offense.pointsPerGame}</Text>
            <Text>Rank: {offense.rank}</Text>
            <Text>Percentile: {offense.percentile}%</Text>
            <Text>Grade: {offense.grade.letter}</Text>
            <Text>Description: {offense.grade.description}</Text>
            <Text>QBR: {offense.QBR}</Text>
            <Text>Passing Yards Per Game: {offense.passPerGame}</Text>
            <Text>Rushing Yards Per Game: {offense.rushPerGame}</Text>
            <Text>Total Yards Per Game: {offense.yardsPerGame}</Text>
          </View>

          <View>
            <Text>Production Info</Text>
            <Text>Total Points: {production.totalPoints}</Text>
            <Text>Points Per Game: {production.pointsPerGame}</Text>
            <Text>Position Rank: {production.positionRank}</Text>
            <Text>Position Percentile: {production.positionPercentile}%</Text>
            <Text>Position Grade: {production.positionGrade.letter}</Text>
            <Text>
              Position Descripton: {production.positionGrade.description}
            </Text>
          </View>

          <View>
            <Text>Opportunity Info</Text>
            {determinePositionOpportunity(position, opportunity)}
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
    padding: 0,
    backgroundColor: "steelblue",
    justifyContent: "center",
  },
  subHeader1Container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 5,
    marginRight: 10,
    marginBottom: 50,
    marginLeft: 30,
  },
  subHeader2Container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 10,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headShot: {
    width: 100,
    height: 100,
  },
});
