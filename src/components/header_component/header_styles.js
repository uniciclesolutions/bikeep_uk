import { StyleSheet } from 'react-native'
import {unitHeight, unitWidth} from "../../constants/dimensions"

export default StyleSheet.create({

    headerContainer:{
        width: unitWidth * 10,
        height: unitWidth * 1.7,
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    headerItem:{
        width: unitWidth * 5,
        height: unitHeight * 0.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    circularContainer: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'flex-start',
        width: unitWidth * 5,
        height: unitWidth * 1.7,
      },
      circularContainerRight: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'flex-end',
        width: unitWidth * 5,
        height: unitWidth * 1.7,
      },
      circularPic: {
        width: unitWidth * 1.5,
        height: unitWidth * 1.5,
        borderRadius: unitWidth * 0.75,
        marginLeft: unitWidth * 0.5,
        marginTop: unitWidth * 0.75,

    
      },
      circularPicRight: {
        width: unitWidth * 1.5,
        height: unitWidth * 1.5,
        borderRadius: unitWidth * 0.75,
        marginRight: unitWidth * 0.5,
        marginTop: unitWidth * 0.75,

    
      },
      circularPicImage: {
        width: unitWidth * 1.5,
        height: unitWidth * 1.5,
        borderRadius: unitWidth * 0.75,
        backgroundColor: 'white',

      },
  

})
