import { StyleSheet } from "react-native";
import { unitHeight, unitWidth } from "../../../constants/dimensions";
import RF from "react-native-responsive-fontsize";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    height: unitHeight * 10,
    width: unitWidth * 10
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  fullView:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    height: unitHeight*10,
    width:unitWidth*10
  },
  animatedBox: {
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: unitWidth*6.5,
    height:unitHeight*10
  },
  transparentBox: {
    flex: 1,
    backgroundColor: "transparent",
    width: unitWidth*3.5,
    height:unitHeight*10

  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F04812"
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: unitWidth * 6.5,
    height: unitHeight * 0.8
  },
  separatorView: {
    width: unitWidth * 6.5,
    height: 0.5,
    backgroundColor: "#D3D3D3"
  },
  circularContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: unitWidth * 2.5,
    height: unitHeight * 2
  },
  circularPic: {
    width: unitWidth * 1.5,
    height: unitWidth * 1.5,
    borderRadius: unitWidth * 0.75,
    backgroundColor: "black",
    marginRight: 1
  },
  button: {
    width: unitWidth * 1.5,
    height: unitWidth * 1.5,
    borderRadius: unitWidth * 0.75,
    backgroundColor: "white",
    marginLeft: unitWidth * 8,
    marginTop: unitHeight * 7,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: unitWidth * 4,
    height: unitHeight * 2
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: unitWidth * 6.5,
    height: unitHeight * 1.5,
    marginTop: unitHeight * 1
  },
  itemText: {
    fontSize: RFValue(20),
    marginLeft: unitWidth * 0.5
  },
  itemTextLocked: {
    fontSize: RFValue(20),
    color: "#D3D3D3",
    marginLeft: unitWidth * 0.5
  },
  itemTitle: {
    fontSize: RFValue(20)
  }
});
