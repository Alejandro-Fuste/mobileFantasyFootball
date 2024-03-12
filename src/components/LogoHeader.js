import { StyleSheet, View } from "react-native";
import React from "react";
import Logo from "../../assets/Logo.svg";

const LogoHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Logo width="100%" height="100%" />
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 23,
  },
});
