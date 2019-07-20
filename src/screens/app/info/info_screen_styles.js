import { StyleSheet } from "react-native";
import { unitHeight, unitWidth } from "../../../constants/dimensions";
import RF from "react-native-responsive-fontsize";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    height: unitHeight * 10,
    width: unitWidth * 10
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },

  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: unitWidth * 10,
    height: unitHeight * 0.8
  },
  separatorView: {
    width: unitWidth * 10,
    height: 1,
    backgroundColor: "#D3D3D3"
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
    justifyContent: "center",
    alignItems: "center",
    width: unitWidth * 10,
    height: unitHeight * 2
  },
  circularPic: {
    width: unitWidth * 3,
    height: unitWidth * 3,
    borderRadius: unitWidth * 1.5,
    backgroundColor: "black"
  },
  itemText: {
    fontSize: RFValue(20),
    marginLeft: unitWidth * 0.5
  },
  switch: {
    position: "absolute",
    right: unitWidth * 0.5
  }
});
