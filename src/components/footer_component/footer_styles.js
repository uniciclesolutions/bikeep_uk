import { StyleSheet } from 'react-native'
import {unitHeight, unitWidth} from "../../constants/dimensions"

export default StyleSheet.create({

    footerContainer:{
        width: unitWidth*10,
        height: 50,
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        display: "flex",
        flexDirection: "row"
    },
    footerItem:{
        width: unitWidth*2.5,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
})
