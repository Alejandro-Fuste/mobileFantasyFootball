import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const TeamScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the team page.</Text>

      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TeamScreen;
