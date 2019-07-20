import { StyleSheet } from 'react-native'
import {unitHeight, unitWidth} from "../../constants/dimensions"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({

    headerContainer:{
        width: unitWidth * 10,
        height: unitWidth * 2,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor:'#D3D3D3'
    },
    circularContainer: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: unitWidth * 2,
        height: unitWidth * 2,
        marginTop: unitHeight * 0.2


      },
      circularContainerRight: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: unitWidth * 6,
        height: unitWidth * 2,
        marginTop: unitHeight * 0.2
      },
      text:{
          fontSize: RFValue(15),
          fontWeight: 'bold'
      }

  

})
