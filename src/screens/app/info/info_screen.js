import React from "react";

import Header from "../../../components/header_component/header";
import {View,TouchableOpacity, Text, Switch, Image, Linking} from 'react-native'
import styles from './info_screen_styles'
import routes from '../../../router/routes'


export default class InfoScreen extends React.Component {

    
      render() {

        return (
          <View style={styles.container}>
            <View style={styles.profileContainer}>
 
            </View>
            <View style={styles.separatorView}/>


            <TouchableOpacity onPress={() => Linking.openURL('mailto:info@bikeep.com') } style={styles.optionItem}>
              <Text style={styles.itemText}>info@bikeep.com</Text>
            </TouchableOpacity>
            <View style={styles.separatorView}/>

            <View style={styles.optionItem}>
              <Text style={styles.itemText}>+37 256679992</Text>
            </View>
            <View style={styles.separatorView}/>

            <TouchableOpacity onPress={()=> Linking.openURL('https://www.bikeep.com')} style={styles.optionItem}>
              <Text style={styles.itemText}>https://www.bikeep.com</Text>
            </TouchableOpacity>
            <View style={styles.separatorView}/>

            <TouchableOpacity onPress={()=> Linking.openURL('https://www.bikeep.com/legal')} style={styles.optionItem}>
              <Text style={styles.itemText}>Terms of use</Text>
            </TouchableOpacity>
            <View style={styles.separatorView}/>

            <View style={styles.optionItem}>
              <Text style={styles.itemText}>Google Maps Legal Notices</Text>
            </View>
            <View style={styles.separatorView}/>


          </View>
        );
      }
    }


