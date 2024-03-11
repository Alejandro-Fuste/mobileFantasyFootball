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
          <View testID="snapPercentageView" style={styles.rowContainer}>
            <Text
              testID="snapPercentageTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Snap Percentage:
            </Text>
            <Text testID="snapPercentagesValue" style={styles.valueColor}>
              {data.snapPercentage}%
            </Text>
          </View>

          <View testID="attemptsDescriptionView" style={styles.rowContainer}>
            <Text
              testID="attemptsDescriptionTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Attempts Description:
            </Text>
            <Text testID="attemptsDescriptionsValue" style={styles.valueColor}>
              {data.attemptsGrade.description} Attempts
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

          <View testID="attemptsView" style={styles.rowContainer}>
            <Text
              testID="attemptsTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Attempts Rank:
            </Text>
            <Text testID="attemptsValue" style={styles.valueColor}>
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

          <View testID="targetsDescriptionView" style={styles.rowContainer}>
            <Text
              testID="targetsDescriptionTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Description:
            </Text>
            <Text testID="targetsDescriptionValue" style={styles.valueColor}>
              {data.targetsGrade.description} Targets
            </Text>
          </View>

          <View testID="receptionsView" style={styles.rowContainer}>
            <Text
              testID="receptionsTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Receptions:
            </Text>
            <Text testID="receptionsValue" style={styles.valueColor}>
              {data.receptions}
            </Text>
          </View>

          <View testID="targetsView" style={styles.rowContainer}>
            <Text
              testID="targetsTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets:
            </Text>
            <Text testID="targetsValue" style={styles.valueColor}>
              {data.targets}
            </Text>
          </View>

          <View testID="targetsRankView" style={styles.rowContainer}>
            <Text
              testID="targetsRankTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Rank:
            </Text>
            <Text testID="targetsRankValue" style={styles.valueColor}>
              {data.targetsRank}
            </Text>
          </View>

          <View testID="targetsPercentileView" style={styles.rowContainer}>
            <Text
              testID="targetsPercentileTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Percentile:
            </Text>
            <Text testID="targetsPercentileValue" style={styles.valueColor}>
              {data.targetsPercentile}%
            </Text>
          </View>

          <View testID="targetsGradeView" style={styles.rowContainer}>
            <Text
              testID="targetsGradeTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Grade:
            </Text>
            <Text testID="targetsGradeValue" style={styles.valueColor}>
              {data.targetsGrade.letter}
            </Text>
          </View>
        </View>
      );
    case "WR":
      return (
        <View>
          <View testID="targetsDescriptionView" style={styles.rowContainer}>
            <Text
              testID="targetsDescriptionTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Description:
            </Text>
            <Text testID="targetsDescriptionValue" style={styles.valueColor}>
              {data.targetsGrade.description} Targets
            </Text>
          </View>

          <View testID="snapPercentageView" style={styles.rowContainer}>
            <Text
              testID="snapPercentageTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Snap Percentage:
            </Text>
            <Text testID="snapPercentagesValue" style={styles.valueColor}>
              {data.snapPercentage}%
            </Text>
          </View>

          <View testID="receptionsView" style={styles.rowContainer}>
            <Text
              testID="receptionsTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Receptions:
            </Text>
            <Text testID="receptionsValue" style={styles.valueColor}>
              {data.receptions}
            </Text>
          </View>

          <View testID="targetsView" style={styles.rowContainer}>
            <Text
              testID="targetsTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets:
            </Text>
            <Text testID="targetsValue" style={styles.valueColor}>
              {data.targets}
            </Text>
          </View>

          <View testID="targetsRankView" style={styles.rowContainer}>
            <Text
              testID="targetsRankTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Rank:
            </Text>
            <Text testID="targetsRankValue" style={styles.valueColor}>
              {data.targetsRank}
            </Text>
          </View>

          <View testID="targetsPercentileView" style={styles.rowContainer}>
            <Text
              testID="targetsPercentileTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Percentile:
            </Text>
            <Text testID="targetsPercentileValue" style={styles.valueColor}>
              {data.targetsPercentile}%
            </Text>
          </View>

          <View testID="targetsGradeView" style={styles.rowContainer}>
            <Text
              testID="targetsGradeTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Grade:
            </Text>
            <Text testID="targetsGradeValue" style={styles.valueColor}>
              {data.targetsGrade.letter}
            </Text>
          </View>
        </View>
      );
    case "TE":
      return (
        <View>
          <View testID="targetsDescriptionView" style={styles.rowContainer}>
            <Text
              testID="targetsDescriptionTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Description:
            </Text>
            <Text testID="targetsDescriptionValue" style={styles.valueColor}>
              {data.targetsGrade.description} Targets
            </Text>
          </View>

          <View testID="snapPercentageView" style={styles.rowContainer}>
            <Text
              testID="snapPercentageTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Snap Percentage:
            </Text>
            <Text testID="snapPercentagesValue" style={styles.valueColor}>
              {data.snapPercentage}%
            </Text>
          </View>

          <View testID="receptionsView" style={styles.rowContainer}>
            <Text
              testID="receptionsTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Receptions:
            </Text>
            <Text testID="receptionsValue" style={styles.valueColor}>
              {data.receptions}
            </Text>
          </View>

          <View testID="targetsView" style={styles.rowContainer}>
            <Text
              testID="targetsTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets:
            </Text>
            <Text testID="targetsValue" style={styles.valueColor}>
              {data.targets}
            </Text>
          </View>

          <View testID="targetsRankView" style={styles.rowContainer}>
            <Text
              testID="targetsRankTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Rank:
            </Text>
            <Text testID="targetsRankValue" style={styles.valueColor}>
              {data.targetsRank}
            </Text>
          </View>

          <View testID="targetsPercentileView" style={styles.rowContainer}>
            <Text
              testID="targetsPercentileTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Percentile:
            </Text>
            <Text testID="targetsPercentileValue" style={styles.valueColor}>
              {data.targetsPercentile}%
            </Text>
          </View>

          <View testID="targetsGradeView" style={styles.rowContainer}>
            <Text
              testID="targetsGradeTitle"
              style={[styles.statsColor, styles.statsTitleFont]}
            >
              Targets Grade:
            </Text>
            <Text testID="targetsGradeValue" style={styles.valueColor}>
              {data.targetsGrade.letter}
            </Text>
          </View>
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
