import React from "react";
import { View, Text, Image, TouchableOpacity, Share } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { unitHeight, unitWidth } from "../../constants/dimensions";
import styles from "./header_styles";

const Header = props => {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "You have been invited to Bikeep. With Bikeep you can now use our smart racks to lock your bike wherever you go. You can download the app clicking the following link: http://www.google.com"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.circularContainer}
      >
        <Ionicons name="ios-arrow-round-back" size={32} />
      </TouchableOpacity>
      <View style={styles.circularContainerRight}>
        <Text style={styles.text}>{props.title}</Text>
      </View>

      <TouchableOpacity style={styles.circularContainer}>
        <Ionicons name="ios-arrow-round-back" size={32} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
