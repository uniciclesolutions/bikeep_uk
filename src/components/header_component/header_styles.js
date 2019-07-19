import { StyleSheet } from 'react-native'
import {unitHeight, unitWidth} from "../../constants/dimensions"

export default StyleSheet.create({

    headerContainer:{
        width: unitWidth * 10,
        height: 80,
        backgroundColor: "#F2F2F2",
        display: "flex",
        flexDirection: "row"
    },
    headerItem:{
        width: unitWidth * 5,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

})
