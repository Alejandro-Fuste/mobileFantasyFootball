import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import PlayerContent from "./PlayerContent";

const Player2 = ({ playerName }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
            <Text style={styles.modalText}> {playerName}</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>X</Text>
            </Pressable>
          </View>
          <PlayerContent style={styles.contentContainer} />
          {/* <View style={styles.contentContainer}>
            <Text>Player info here</Text>
          </View> */}
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.player}>Player Avatar</Text>
        <Text style={styles.player}>Player Name: {playerName}</Text>
        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
      </Pressable>
    </View>
  );
};

export default Player2;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 10,
  },
  modalHeaderView: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "steelblue",
    justifyContent: "space-between",
    padding: 10,
  },
  contentContainer: {
    height: "100%",
    backgroundColor: "skyblue",
  },
  button: {
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
    width: "100%",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
});
