import React from "react";

import MapView from "react-native-maps";
import Header from "../../../components/header_component/header";
import Footer from "../../../components/footer_component/footer";
import MenuDrawer from 'react-native-side-drawer'
import {View, TouchableOpacity, Text, Image} from 'react-native'
import styles from './home_screen_styles'
import routes from '../../../router/routes'
import {unitHeight, unitWidth} from "../../../constants/dimensions"


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
					<Image
					    style={styles.circularPic}
					    resizeMode="cover"
                        source={require('../../../../assets/bikeep.png')}
					    />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.itemTitle}>Enric Camacho</Text>
                    <Text style={styles.itemTitle}>Barcelona</Text>
                </View>
              </View>

              <TouchableOpacity onPress={()=>this.props.navigation.navigate(routes.profile())} style={styles.optionItem}>
              <Text style={styles.itemText}>Profile</Text>
              </TouchableOpacity>
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
              <View style={styles.separatorView}></View>

              <TouchableOpacity onPress={()=>this.toggleOpen()} style={styles.optionItem}>
              <Text style={styles.itemText}>Close Menu</Text>
              </TouchableOpacity>
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
        <MapView style={{ height: unitHeight *10 }} >
        <Header onPress={this.toggleOpen} />

        </MapView>
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