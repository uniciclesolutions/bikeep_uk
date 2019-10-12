import React from "react";
import { Icon,View, Text, Image, TouchableOpacity, Share } from "react-native";
import { unitHeight, unitWidth } from "../../constants/dimensions";
import styles from "./header_styles";

const Header = props => {

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.circularContainer}
      >
        <Icon name="ios-arrow-round-back" size={32} />
      </TouchableOpacity>
      <View style={styles.circularContainerRight}>
        <Text style={styles.text}>{props.title}</Text>
      </View>

      <TouchableOpacity style={styles.circularContainer}>
        <Icon name="ios-arrow-round-back" size={32} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
