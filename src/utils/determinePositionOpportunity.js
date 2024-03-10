import { StyleSheet, Text, View } from "react-native";
import React from "react";

function determinePositionOpportunity(position, data) {
  switch (position) {
    case "QB":
      return (
        <View>
          <View testID="snapPercentageView" style={styles.rowContainer}>
            <Text
              testID="snapPercentageTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Snap Percentage:
            </Text>
            <Text testID="snapPercentageValue" style={styles.valueColor}>
              {data.snapPercentage}%
            </Text>
          </View>

          <View testID="completionsView" style={styles.rowContainer}>
            <Text
              testID="completionsTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Completions:
            </Text>
            <Text testID="completionsValue" style={styles.valueColor}>
              {data.completions}
            </Text>
          </View>

          <View testID="attemptsView" style={styles.rowContainer}>
            <Text
              testID="attemptsTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Attempts:
            </Text>
            <Text testID="attemptsValue" style={styles.valueColor}>
              {data.attempts}
            </Text>
          </View>

          <View testID="attemptsRankView" style={styles.rowContainer}>
            <Text
              testID="attemptsRankTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Attempts Rank:
            </Text>
            <Text testID="attemptsRankValue" style={styles.valueColor}>
              {data.attemptsRank}
            </Text>
          </View>

          <View testID="attemptsPercentileView" style={styles.rowContainer}>
            <Text
              testID="attemptsPercentileTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Attempts Percentile:
            </Text>
            <Text testID="attemptsPercentileValue" style={styles.valueColor}>
              {data.attemptsPercentile}%
            </Text>
          </View>

          <View testID="attemptsGradeView" style={styles.rowContainer}>
            <Text
              testID="attemptsGradeTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Attempts Grade:
            </Text>
            <Text testID="attemptsGradeValue" style={styles.valueColor}>
              {data.attemptsGrade.letter}
            </Text>
          </View>

          <View testID="attemptsView" style={styles.rowContainer}>
            <Text
              testID="attemptsTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Attempts Description:
            </Text>
            <Text testID="rushingAttemptsValue" style={styles.valueColor}>
              {data.attemptsGrade.description}
            </Text>
          </View>

          <View testID="rushingAttemptView" style={styles.rowContainer}>
            <Text
              testID="rushingAttemptTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Rushing Attempts:
            </Text>
            <Text testID="rushingAttemptsValue" style={styles.valueColor}>
              {data.rushingAttempts}
            </Text>
          </View>
        </View>
      );
    case "RB":
      return (
        <View>
          <Text>Snap Percentage: {data.snapPercentage}%</Text>
          <Text>Attempts: {data.attempts}</Text>
          <Text>Attempts Rank: {data.attemptsRank}</Text>
          <Text>Attempts Percentile: {data.attemptsPercentile}%</Text>
          <Text>Attempts Grade: {data.attemptsGrade.letter}</Text>
          <Text>Attempts Description: {data.attemptsGrade.description}</Text>
          <Text>Receptions: {data.receptions}</Text>
          <Text>Targets: {data.targets}</Text>
          <Text>Targets Rank: {data.targetsRank}</Text>
          <Text>Targets Percentile: {data.targetsPercentile}%</Text>
          <Text>Targets Grade: {data.targetsGrade.letter}</Text>
          <Text>Targets Description: {data.targetsGrade.description}</Text>
        </View>
      );
    case "WR":
      return (
        <View>
          <Text>Snap Percentage: {data.snapPercentage}%</Text>
          <Text>Receptions: {data.receptions}</Text>
          <Text>Targets: {data.targets}</Text>
          <Text>Targets Rank: {data.targetsRank}</Text>
          <Text>Targets Percentile: {data.targetsPercentile}%</Text>
          <Text>Targets Grade: {data.targetsGrade.letter}</Text>
          <Text>Targets Description: {data.targetsGrade.description}</Text>
        </View>
      );
    case "TE":
      return (
        <View>
          <Text>Snap Percentage: {data.snapPercentage}%</Text>
          <Text>Receptions: {data.receptions}</Text>
          <Text>Targets: {data.targets}</Text>
          <Text>Targets Rank: {data.targetsRank}</Text>
          <Text>Targets Percentile: {data.targetsPercentile}%</Text>
          <Text>Targets Grade: {data.targetsGrade.letter}</Text>
          <Text>Targets Description: {data.targetsGrade.description}</Text>
        </View>
      );
    default:
      return (
        <View>
          <Text>Something went wrong with determine position opportunity.</Text>
          ;
        </View>
      );
  }
}

export default determinePositionOpportunity;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
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
