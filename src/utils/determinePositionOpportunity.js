import { StyleSheet, Text, View } from "react-native";
import React from "react";

function determinePositionOpportunity(position, data) {
  switch (position) {
    case "QB":
      return (
        <View>
          <Text>Snap Percentage: {data.snapPercentage}%</Text>
          <Text>Completions: {data.completions}</Text>
          <Text>Attempts: {data.attempts}</Text>
          <Text>Attempts Rank: {data.attemptsRank}</Text>
          <Text>Attempts Percentile: {data.attemptsPercentile}%</Text>
          <Text>Attempts Grade: {data.attemptsGrade.letter}</Text>
          <Text>Attempts Description: {data.attemptsGrade.description}</Text>
          <Text>Rushing Attempts: {data.rushingAttempts}</Text>
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
