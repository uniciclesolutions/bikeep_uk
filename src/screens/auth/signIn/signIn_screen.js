import React, { useState } from "react";
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
import { useNavigation } from "react-navigation-hooks";

const SignInScreen = props => {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState(undefined);
  const changeCheckValue = () => {
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  const { navigate } = useNavigation();
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
        <Item>
          <Icon style={{ color: "white" }} active name="call" />
          {!inputValue && <Label>Phone Number</Label>}
          <Input
            style={{ color: "white" }}
            onChangeText={() => setInputValue(this)}
          />
        </Item>
        <View style={styles.agreeContainer}>
          <CheckBox
            checked={checked}
            color="red"
            onPress={() => changeCheckValue()}
          />
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
            onPress={() => {
              navigate(routes.home());
            }}
          >
            <Text> Continue </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
