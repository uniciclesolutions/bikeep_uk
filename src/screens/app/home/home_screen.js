import React from "react";

import * as Expo from "expo";
import MapView from "react-native-maps";
import Header from "../../../components/home_header_component/home_header";
import Footer from "../../../components/footer_component/footer";
import MenuDrawer from "react-native-side-drawer";
import { View, TouchableOpacity, Text, Image, Button } from "react-native";
import styles from "./home_screen_styles";
import routes from "../../../router/routes";
import { unitHeight, unitWidth } from "../../../constants/dimensions";
import { Ionicons , Entypo, Feather} from "@expo/vector-icons";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mapRegion: {
        latitude: 52.639531,
        longitude: -1.141558,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0121
      },
      locationResult: null,
      location: { coords: { latitude: 52.639531, longitude: -1.141558 } }
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = location => {
    this.setState({ location });
  };

  _getLocationAsync = async () => {
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
        location
      });
    }
    let location = await Expo.Location.getCurrentPositionAsync({
      enableHighAccuracy: true
    });
    this.setState({ locationResult: JSON.stringify(location), location });
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <View style={styles.fullView}>
        <View style={styles.animatedBox}>
          <View style={styles.profileContainer}>
            <View style={styles.circularContainer}>
              <Image
                style={styles.circularPic}
                resizeMode="cover"
                source={require("../../../../assets/bikeep.png")}
              />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.itemTitle}>Enric Camacho</Text>
              <Text style={styles.itemTitle}>Barcelona</Text>
            </View>
          </View>
          <View style={styles.separatorView} />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(routes.profile())}
            style={styles.optionItem}
          >
            <Ionicons style={styles.icon} name="ios-person" size={20} />
            <Text style={styles.itemText}>Profile</Text>
          </TouchableOpacity>
          <View style={styles.separatorView} />
          <TouchableOpacity style={styles.optionItem}>
          <Ionicons style={styles.icon} name="ios-clock" size={20} color={'#D3D3D3'} />
            <Text style={styles.itemTextLocked}>History</Text>
          </TouchableOpacity>
          <View style={styles.separatorView} />

          <TouchableOpacity style={styles.optionItem}>
          <Ionicons style={styles.icon} name="ios-construct" size={20} color={'#D3D3D3'} />
            <Text style={styles.itemTextLocked}>Fix your bike</Text>
          </TouchableOpacity>
          <View style={styles.separatorView} />

          <TouchableOpacity style={styles.optionItem}>
          <Ionicons style={styles.icon} name="ios-bicycle" size={20} color={'#D3D3D3'} />
            <Text style={styles.itemTextLocked}>Rent a bike</Text>
          </TouchableOpacity>
          <View style={styles.separatorView} />

          <TouchableOpacity style={styles.optionItem}>
          <Ionicons style={styles.icon} name="ios-pricetags" size={20} color={'#D3D3D3'} />
            <Text style={styles.itemTextLocked}>Buy & Sell</Text>
          </TouchableOpacity>
          <View style={styles.separatorView} />

          <TouchableOpacity style={styles.optionItem}>
          <Ionicons style={styles.icon} name="ios-lock" size={20} color={'#D3D3D3'} />
            <Text style={styles.itemTextLocked}>Store your bike</Text>
          </TouchableOpacity>
          <View style={styles.separatorView} />


          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(routes.info())}
            style={styles.optionItem}
          >
            <Ionicons style={styles.icon} name="ios-information-circle-outline" size={20} />
            <Text style={styles.itemText}>Info</Text>
          </TouchableOpacity>
          <View style={styles.separatorView} />


          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(routes.signIn())}
            style={styles.optionItem}
          >
            <Ionicons style={styles.icon} name="ios-log-out" size={20} />
            <Text style={styles.itemText}>Sign Out</Text>
          </TouchableOpacity>
          <View style={styles.separatorView} />
        </View>
        <TouchableOpacity onPress={() => this.toggleOpen()} style={styles.transparentBox} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          drawerContent={this.drawerContent()}
          drawerPercentage={100}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <MapView
            zoomEnabled
            scrollEnabled
            showsMyLocationButton
            showsUserLocation
            style={styles.map}
            region={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.0322,
              longitudeDelta: 0.0121
            }}
          />

          <Header onPress={this.toggleOpen} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handleMapRegionChange(this.state.location)}
          >
            <Ionicons name="md-locate" size={32} />
          </TouchableOpacity>
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
