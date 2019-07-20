import React from "react";

import MapView from "react-native-maps";
import Header from "../../../components/header_component/header";
import Footer from "../../../components/footer_component/footer";
import { View, TouchableOpacity, Text, Switch, Image } from "react-native";
import styles from "./profile_screen_styles";
import routes from "../../../router/routes";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} title={"Profile"} />
        <View style={styles.profileContainer}>
          <Image
            style={styles.circularPic}
            resizeMode="cover"
            source={require("../../../../assets/bikeep.png")}
          />
        </View>
        <View style={styles.separatorView} />

        <View style={styles.optionItem}>
          <Text style={styles.itemText}>Name: Enric Camacho</Text>
        </View>
        <View style={styles.separatorView} />

        <View style={styles.optionItem}>
          <Text style={styles.itemText}>Phone number: +34 669543142</Text>
        </View>
        <View style={styles.separatorView} />

        <View style={styles.optionItem}>
          <Text style={styles.itemText}>City: Leicester</Text>
        </View>
        <View style={styles.separatorView} />

        <View style={styles.optionItem}>
          <Text style={styles.itemText}>Notifications</Text>
          <Switch style={styles.switch} />
        </View>
        <View style={styles.separatorView} />
      </View>
    );
  }
}
