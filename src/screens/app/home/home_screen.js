import React from "react";

import MapView from "react-native-maps";
import Header from "../../../components/header_component/header";
import Footer from "../../../components/footer_component/footer";
import MenuDrawer from 'react-native-side-drawer'
import {View,TouchableOpacity, Text} from 'react-native'
import styles from './home_screen_styles'

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
      }
    
      toggleOpen = () => {
        this.setState({ open: !this.state.open });
      };
    
      drawerContent = () => {
        return (
          <View style={styles.animatedBox}>
              <View style={styles.profileContainer}>
                <View style={styles.circularContainer}>
                    <View style={styles.circularPic}/>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.itemText}>Enric Camacho</Text>
                    <Text style={styles.itemText}>Barcelona</Text>
                </View>
              </View>

              <View style={styles.optionItem}>
              <Text style={styles.itemText}>Profile</Text>
              </View>
              <View style={styles.separatorView}></View>
              <View style={styles.optionItem}>
              <Text style={styles.itemText}>History</Text>
              </View>
              <View style={styles.separatorView}></View>

              <View style={styles.optionItem}>
              <Text style={styles.itemText}>Fix your bike</Text>
              </View>
              <View style={styles.separatorView}></View>

              <View style={styles.optionItem}>
              <Text style={styles.itemText}>Buy & Sell</Text>
              </View>
              <View style={styles.separatorView}></View>

              <View style={styles.optionItem}>
              <Text style={styles.itemText}>Info</Text>
              </View>
          </View>
        );
      };
    
      render() {
        return (
          <View style={styles.container}>
            <MenuDrawer 
              open={this.state.open} 
              drawerContent={this.drawerContent()}
              drawerPercentage={65}
              animationTime={250}
              overlay={true}
              opacity={0.4}
            >
        <Header />
        <TouchableOpacity onPress={this.toggleOpen}>
            <Text style={styles.itemText}>Open Menu Madafakkkkkkka</Text>
        </TouchableOpacity>
        <MapView style={{ flex: 1 }} />
        <Footer />
            </MenuDrawer>
          </View>
        );
      }
    }


/*       
<Header />
        <MapView style={{ flex: 1 }} />
        <Footer />
        */