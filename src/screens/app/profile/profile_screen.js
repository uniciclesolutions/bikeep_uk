import React, { useState } from "react";

import MapView from "react-native-maps";
import Header from "../../../components/header_component/header";
import Footer from "../../../components/footer_component/footer";
import { View, TouchableOpacity, Text, Switch, Image } from "react-native";
import styles from "./profile_screen_styles";
import routes from "../../../router/routes";
import { Ionicons } from "@expo/vector-icons";
import BikeModal from './components/bike_modal/bike_modal_component'
import { useNavigation } from "react-navigation-hooks";

const ProfileScreen = props => {

    const [isOpen, setIsOpen] = useState(false)
    const changeIsOpenValue = () => {
      if(isOpen===true){
        setIsOpen(false);

      }else{
        setIsOpen(true);
      }
         
      
    }

    const hasBike = false;

    return (
      <React.Fragment>
      <View style={styles.container}>
        <Header navigation={useNavigation()} title={"Profile"} />
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

        {hasBike ? null : (
          <TouchableOpacity onPress={()=> changeIsOpenValue()} style={styles.optionItem}>
            <Ionicons style={styles.itemText} name="ios-add" size={64} />

            <Text style={styles.itemText}>Add a bike</Text>
          </TouchableOpacity>
        )}

        {hasBike ? null : <View style={styles.separatorView} />}
      </View>
      <BikeModal onClose={()=> changeIsOpenValue()} isOpen={isOpen}></BikeModal>

      </React.Fragment>
    )
  }

  export default ProfileScreen;
