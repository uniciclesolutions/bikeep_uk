import { StyleSheet } from 'react-native'
import {unitHeight, unitWidth} from "../../constants/dimensions"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({

    headerContainer:{
        width: unitWidth * 10,
        height: unitWidth * 1.5,
        backgroundColor: "#F8F9FA",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    circularContainer: {
        flexDirection: 'column',
        justifyContent:'flex-end',
        alignItems: 'center',
        width: unitWidth * 2,
        height: unitWidth * 1.5,

      },
      circularContainerRight: {
        flexDirection: 'column',
        justifyContent:'flex-end',
        alignItems: 'center',
        width: unitWidth * 6,
        height: unitWidth * 1.5,
      },
      text:{
          fontSize: RFValue(20),
          marginBottom: unitHeight * 0.15
      }

  

})
