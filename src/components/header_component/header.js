import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {unitHeight, unitWidth} from "../../constants/dimensions"
import styles from './header_styles'

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.circularContainer}>
        <TouchableOpacity style={styles.circularPic} onPress={props.onPress}>
				<Image
        style={styles.circularPicImage}
					resizeMode="cover"
          source={require('../../../assets/bikeep.png')}
					></Image>
          </TouchableOpacity>
      </View>
      <View style={styles.circularContainerRight}>
        <TouchableOpacity style={styles.circularPicRight} onPress={props.onPress}>
				<Image
        style={styles.circularPicImage}
					resizeMode="cover"
          source={require('../../../assets/share.png')}
					></Image>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
