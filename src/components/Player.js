import { StyleSheet, Text, View, Modal, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import PlayerContent from "./PlayerContent";
import { getPlayer } from "../actions/getActions";

const Player = ({ playerName }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [player, setPlayer] = useState(getPlayer(playerName).payload);

  return (
    <View>
      <Modal
        presentationStyle="pageSheet"
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeaderView}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>
                <Ionicons name="close-outline" size={24} />
              </Text>
            </Pressable>
          </View>
          <PlayerContent style={styles.contentContainer} data={player} />
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Image src={player.headShot} style={styles.headShot} />
        <Text style={styles.nameGradeText}>{playerName}</Text>
        <View style={styles.gradeTextView}>
          <Text style={[styles.nameGradeText, styles.textAlign]}>
            {player.overallGrade.grade.letter}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 10,
  },
  modalHeaderView: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "steelblue",
    justifyContent: "flex-end",
    padding: 10,
  },
  contentContainer: {
    height: "100%",
    backgroundColor: "skyblue",
  },
  button: {
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    elevation: 2,
    width: "100%",
  },
  buttonOpen: {
    backgroundColor: "white",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonClose: {
    padding: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  headShot: {
    width: 66,
    height: 66,
    resizeMode: "cover",
    borderRadius: 50,
    backgroundColor: "#30D5C8",
  },
  gradeTextView: {
    width: 20,
  },
  nameGradeText: {
    backgroundColor: "black",
    fontSize: 16,
    fontWeight: "bold",
    color: "#454545",
  },
  textAlign: {
    textAlign: "left",
  },
});
