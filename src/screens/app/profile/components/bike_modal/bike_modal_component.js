import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Switch,
  Image,
  Linking,
  Platform,
  Modal,
  TextInput
} from "react-native";
import { Icon, Button } from "native-base";
import { useNavigation } from "react-navigation-hooks";
import { unitHeight, unitWidth } from "../../../../../constants/dimensions";
import styles from "./bike_modal_component_styles";

function BikeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const height =
    Platform.OS === "ios" || isTallScreen ? unitHeight * 6 : unitHeight * 7.5;
  const leftHeight = unitHeight * 10 - height;

  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "transparent",
          width: unitWidth * 10,
          height: leftHeight
        }}
        onPress={onClose}
      />
      <View
        style={{
          height: height,
          width: unitWidth * 10,
          backgroundColor: "#696969",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <TouchableOpacity style={styles.picture}>
          <Text>Insert picture</Text>
        </TouchableOpacity>
        <TextInput style={styles.textInput} placeholder={"Bike brand"} />
        <TextInput style={styles.textInput} placeholder={"Model"} />
        <TextInput style={styles.textInput} placeholder={"Year"} />
      </View>
    </Modal>
  );
}

export default BikeModal;
