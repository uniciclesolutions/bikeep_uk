import React, { useState } from "react";
import styles from "./signIn_screen_styles";
import {
  View,
  Text,
  Image,
  TextInput,

} from "react-native";
import {
  Item,
  Icon,
  CheckBox,
  Button
} from "native-base";
import routes from "../../../router/routes";
import { useNavigation } from "react-navigation-hooks";
import { db } from '../../../config';

const SignInScreen = props => {
  const [checked, setChecked] = useState(false);
  const [codeIsSent, setCodeIsSent] = useState(false);
  const [inputValue, setInputValue] = useState(undefined);
  const changeCheckValue = () => {
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  const { navigate } = useNavigation();

  let addItem = item => {
    if (!isNaN(inputValue) && inputValue.length === 9 && checked) {
     /* db.ref('/Users').push({
        phoneNumber: '+34' + item
      })*/
      setCodeIsSent(true)
    }

  }

  let confirmCode = item => {
    if (inputValue === '123123') {

      navigate(routes.home())
      setCodeIsSent(false)
    }

  }

  renderCodeVerification= () => {
  return(
    <View style={styles.background}>
    <View style={styles.signInContainer}>
      
      <Text style={styles.subtitle}>
        Introduce below the code sent to your phone number
      </Text>
      <Item>
        <TextInput
          placeholder={"Verification code"}
          placeholderTextColor={"white"}
          style={{ color: "white" }}
          onChangeText={(number) => setInputValue(number)}
        />
      </Item>
      
      <View style={styles.confirmButton}>
        <Button
          full
          rounded
          style={{
            backgroundColor: "rgba(253,187,45,1) "
          }}
          onPress={() => 
            confirmCode(inputValue)
          }
        >
          <Text> Confirm </Text>
        </Button>
      </View>
    </View>
  </View>
  )
  }
  renderSignIn= () =>  {

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
            <TextInput
              placeholder={"Phone Number"}
              placeholderTextColor={"white"}
              style={{ color: "white" }}
              onChangeText={(number) => setInputValue(number)}
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
              onPress={() =>
                addItem(inputValue)
              }
            >
              <Text> Continue </Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }



  return (
    codeIsSent? (this.renderCodeVerification()): (this.renderSignIn())
  );
};

export default SignInScreen;

