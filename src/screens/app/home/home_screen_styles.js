import { StyleSheet } from 'react-native'
import {unitHeight, unitWidth} from "../../../constants/dimensions"
import RF from 'react-native-responsive-fontsize'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({

container:{
    height: unitHeight * 10,
    width: unitWidth * 10
},
animatedBox: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'flex-start'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F04812'
  },
  optionItem: {
    flexDirection: 'row',
    alignItems:  'center',
    justifyContent:'flex-start',
    width: unitWidth * 6.5,
    height: unitHeight * 0.8,

  },
  separatorView: {
    width: unitWidth * 6.5,
    height: 2,
    backgroundColor: 'black'

  },
  circularContainer: {
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    width: unitWidth * 2.5,
    height: unitHeight * 2,
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    width: unitWidth * 4,
    height: unitHeight * 2,


  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    width: unitWidth * 6.5,
    height: unitHeight * 2,
    marginTop: unitHeight * 1

  },
  itemText:{
      fontSize: RFValue(20)
  }
})
