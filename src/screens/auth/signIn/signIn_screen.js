import React from "react";
import styles from "./signIn_screen_styles";
import {
  View,
  TouchableOpacity,
  Text,
  Switch,
  Image,
  Linking,
  Platform
} from "react-native";
import {
  Container,
  Item,
  Input,
  Icon,
  ListItem,
  CheckBox,
  Body,
  Label,
  Button
} from "native-base";

import routes from "../../../router/routes";

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelValue: "",
      checked: false
    };
  }
  onValueChange2(value) {
    this.setState({
      labelValue: value
    });
  }
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.signInContainer}>
          <Image
            style={styles.circularPic}
            resizeMode="cover"
            source={require("../../../../assets/bikeep.png")}
          />
          <Text style={styles.title}>START BIKEEP</Text>
          <Text style={styles.subtitle}>
            We will send you an SMS message to validate your phone number
          </Text>
          <Item rounded>
            <Icon style={{ color: "white" }} active name="call" />
            {this.state.labelValue == "" && <Label>Phone Number</Label>}
            <Input
              style={{ color: "white" }}
              onValueChange={this.onValueChange2.bind(this)}
            />
            <Text>{this.state.labelValue}</Text>
          </Item>
          <View style={styles.agreeContainer}>
            <CheckBox checked={this.state.checked} color="red" />
            <Text style={{ color: "white", marginLeft: 20 }}>
              I confirm that I am 18 years old or older
            </Text>
          </View>
          <View style={styles.confirmButton}>
            <Button
              full
              rounded
              style={{
                backgroundColor: "rgba(253,187,45,1) "
              }}
              onPress={() => this.props.navigation.navigate(routes.home())}
            >
              <Text> Continue </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
