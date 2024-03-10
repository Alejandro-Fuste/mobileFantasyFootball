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
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.subHeader1Container}>
          <Image src={headShot} style={styles.headShot} />

          <View style={styles.subHeader2Container}>
            <Text style={styles.playerInfoTitle}>{name}</Text>
            <Text style={styles.playerInfoFont}>{team}</Text>
            <Text style={styles.playerInfoFont}>{position}</Text>
          </View>

          <View testID="overGradeView">
            <Text style={styles.playerInfoTitle}>Grade</Text>
            <Text style={styles.playerInfoFont}>{overallGrade.value}</Text>
            <Text style={styles.playerInfoFont}>
              {overallGrade.grade.letter}
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          {/* Overall Info */}
          <View
            testID="overallInfoView"
            style={[styles.infoContainer, styles.columnContainer]}
          >
            <Text style={[styles.titleFont, styles.statsColor]}>
              Overall Info
            </Text>
            <View style={styles.rowContainer}>
              <Text
                style={[styles.statsColor, styles.statsTitleFont]}
                testID="descriptionTitle"
              >
                Descripton:{" "}
              </Text>
              <Text style={styles.valueColor} testID="descriptionValue">
                {overallGrade.grade.description} Player
              </Text>
            </View>

            <View style={styles.rowContainer}>
              <Text
                style={[styles.statsColor, styles.statsTitleFont]}
                testID="descriptionTitle"
              >
                Overall Rank:{" "}
              </Text>
              <Text style={styles.valueColor} testID="overallRankValue">
                {production.overallRank}
              </Text>
            </View>

            <View style={styles.rowContainer}>
              <Text
                style={[styles.statsColor, styles.statsTitleFont]}
                testID="overallPercentileTile"
              >
                Overall Percentile:
              </Text>
              <Text style={styles.valueColor} testID="overallPercentileValue">
                {production.overallPercentile}%
              </Text>
            </View>
          </View>

          {/* Offense Info */}

          <View
            testID="offenseInfoView"
            style={[styles.infoContainer, styles.columnContainer]}
          >
            <Text style={[styles.titleFont, styles.statsColor]}>
              Offense Info
            </Text>
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

          {/* Production Info */}

          <View
            testID="productionInfoView"
            style={[styles.infoContainer, styles.columnContainer]}
          >
            <Text style={[styles.titleFont, styles.statsColor]}>
              Production Info
            </Text>
            <Text>Total Points: {production.totalPoints}</Text>
            <Text>Points Per Game: {production.pointsPerGame}</Text>
            <Text>Position Rank: {production.positionRank}</Text>
            <Text>Position Percentile: {production.positionPercentile}%</Text>
            <Text>Position Grade: {production.positionGrade.letter}</Text>
            <Text>
              Position Descripton: {production.positionGrade.description}
            </Text>
          </View>

          {/* Opportunity Info */}

          <View
            testID="opportunityInfoView"
            style={[styles.infoContainer, styles.columnContainer]}
          >
            <Text style={[styles.titleFont, styles.statsColor]}>
              Opportunity Info
            </Text>
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
    backgroundColor: "#122d42",
  },
  subHeader1Container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 5,
    marginRight: 20,
    marginBottom: 50,
    marginLeft: 0,
  },
  subHeader2Container: {
    flex: 0,
    padding: 10,
  },
  playerInfoTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  playerInfoFont: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
  },
  contentContainer: {
    flex: 10,
    padding: 5,
    backgroundColor: "#f2f2f2",
    justifyContent: "space-evenly",
  },
  columnContainer: {
    flex: 0,
    flexDirection: "column",
  },
  rowContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  headShot: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
  },
  titleFont: {
    color: "#454545",
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 5,
  },
  valueColor: {
    color: "#5c5c5c",
    marginBottom: 5,
  },
});
