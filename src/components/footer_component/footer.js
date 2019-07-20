import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { unitHeight, unitWidth } from "../../constants/dimensions";
import styles from "./footer_styles";

export const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerItem}>
        <Ionicons name="md-menu" size={32} />
      </View>
      <View style={styles.footerItem}>
        <Ionicons name="md-bicycle" size={32} />
      </View>
      <View style={styles.footerItem}>
        <Ionicons name="md-person" size={32} />
      </View>
      <View style={styles.footerItem}>
        <Ionicons name="md-card" size={32} />
      </View>
    </View>
  );
};
export default Footer;
