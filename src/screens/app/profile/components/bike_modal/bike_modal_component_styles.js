import { StyleSheet } from "react-native";
import { unitHeight, unitWidth } from "../../../../../constants/dimensions";
import RF from "react-native-responsive-fontsize";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    

 textInput:{
    height: unitHeight*0.5,
    width: unitWidth * 9,
    backgroundColor: "white",
    marginTop: unitHeight*0.25,

 },
 picture:{
    height: unitHeight*2,
    width: unitHeight * 2,
    backgroundColor: "white",
    marginTop: unitHeight*0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
 }
});
