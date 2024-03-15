import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import determinePositionOpportunity from "../utils/determinePositionOpportunity";
import defaultAvatar from "../../assets/defaultImage.png";

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
          <Image
            src={headShot}
            defaultSource={defaultAvatar}
            style={styles.headShot}
            accessibilityLabel="Player Image"
          />

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

          {/* Production Info */}

          <View
            testID="productionInfoView"
            style={[styles.infoContainer, styles.columnContainer]}
          >
            <Text style={[styles.titleFont, styles.statsColor]}>
              Production Info
            </Text>

            <View testID="positionDescriptionView" style={styles.rowContainer}>
              <Text
                testID="positionDescriptionTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Position Descripton:
              </Text>
              <Text testID="positionDescriptionValue" style={styles.valueColor}>
                {production.positionGrade.description} Production
              </Text>
            </View>

            <View testID="totalPointsView" style={styles.rowContainer}>
              <Text
                testID="totalPointsTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Total Points:
              </Text>
              <Text testID="totalPointsValue" style={styles.valueColor}>
                {production.totalPoints}
              </Text>
            </View>

            <View testID="productionPPGView" style={styles.rowContainer}>
              <Text
                testID="productionPPGTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Points Per Game:
              </Text>
              <Text testID="productionPPGValue" style={styles.valueColor}>
                {production.pointsPerGame}
              </Text>
            </View>

            <View testID="positionRankView" style={styles.rowContainer}>
              <Text
                testID="positionRankTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Position Rank:
              </Text>
              <Text testID="positionRankValue" style={styles.valueColor}>
                {production.positionRank}
              </Text>
            </View>

            <View testID="positionPercentileView" style={styles.rowContainer}>
              <Text
                testID="positionPercentileTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Position Percentile:
              </Text>
              <Text testID="positionPercentileValue" style={styles.valueColor}>
                {production.positionPercentile}%
              </Text>
            </View>

            <View testID="positionGradeView" style={styles.rowContainer}>
              <Text
                testID="positionGradeTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Position Grade:
              </Text>
              <Text testID="positionGradeValue" style={styles.valueColor}>
                {production.positionGrade.letter}
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

            <View testID="offenseDescriptionView" style={styles.rowContainer}>
              <Text
                testID="offenseDescriptionTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Description:
              </Text>
              <Text testID="offenseDescriptionValue" style={styles.valueColor}>
                {offense.grade.description} Offense
              </Text>
            </View>

            <View testID="ppgView" style={styles.rowContainer}>
              <Text
                testID="ppgTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Points Per Game:
              </Text>
              <Text testID="ppgValue" style={styles.valueColor}>
                {offense.pointsPerGame}
              </Text>
            </View>

            <View testID="ppgRankView" style={styles.rowContainer}>
              <Text
                testID="ppgRankTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Rank:
              </Text>
              <Text testID="ppgRankValue" style={styles.valueColor}>
                {offense.rank}
              </Text>
            </View>

            <View testID="offensePercentileView" style={styles.rowContainer}>
              <Text
                testID="offensePercentileTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Percentile:
              </Text>
              <Text testID="offensePercentileValue" style={styles.valueColor}>
                {offense.percentile}%
              </Text>
            </View>

            <View testID="offenseGradeView" style={styles.rowContainer}>
              <Text
                testID="offenseGradeTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Grade:
              </Text>
              <Text testID="offenseGradeValue" style={styles.valueColor}>
                {offense.grade.letter}
              </Text>
            </View>

            <View testID="qbrView" style={styles.rowContainer}>
              <Text
                testID="qbrTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                QBR:
              </Text>
              <Text testID="offenseGradeValue" style={styles.valueColor}>
                {offense.QBR}
              </Text>
            </View>

            <View testID="passingYardsView" style={styles.rowContainer}>
              <Text
                testID="passingYardsTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Passing Yards Per Game:
              </Text>
              <Text testID="passingYardsValue" style={styles.valueColor}>
                {offense.passPerGame}
              </Text>
            </View>

            <View testID="rushingYardsView" style={styles.rowContainer}>
              <Text
                testID="rushingYardsTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Rushing Yards Per Game:
              </Text>
              <Text testID="rushingYardsValue" style={styles.valueColor}>
                {offense.rushPerGame}
              </Text>
            </View>

            <View testID="totalYardsView" style={styles.rowContainer}>
              <Text
                testID="totalYardsTitle"
                style={[styles.statsColor, styles.statsTitleFont]}
              >
                Total Yards Per Game:
              </Text>
              <Text testID="totalYardsValue" style={styles.valueColor}>
                {offense.yardsPerGame}
              </Text>
            </View>
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
