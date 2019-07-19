import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {unitHeight, unitWidth} from "../../constants/dimensions"
import styles from './header_styles'

const Header = props => {
  return (
    <View
    style={styles.headerContainer}

    >
      <View
        style={styles.headerItem }
      >
        <Ionicons
          style={{ display: "flex", justifyContent: "flex-start" }}
          name="md-menu"
          size={32}
        />
      </View>
      <View
        style={styles.headerItem }

      >
        <Ionicons name="md-bicycle" size={32} />
      </View>
    </View>
  );
};

export default Header;
