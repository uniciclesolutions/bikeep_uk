import { StyleSheet } from "react-native";
import { unitHeight, unitWidth } from "../../../constants/dimensions";

export default StyleSheet.create({
  container: {
    height: unitHeight * 10,
    width: unitWidth * 10
  },
  background: {
    backgroundColor: "#001a00",
    width: "100%",
    height: "100%"
  },
  circularPic: {
    width: unitWidth * 3,
    height: unitWidth * 3,
    borderRadius: unitWidth * 1.5,
    backgroundColor: "black"
  },
  signInContainer: {
    justifyContent: "center",
    width: unitWidth * 9,
    height: unitHeight * 10,
    paddingLeft: unitWidth
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: unitHeight * 0.5,
    paddingBottom: unitHeight * 0.2
  },

  subtitle: {
    fontSize: 12,
    color: "grey",
    paddingBottom: unitHeight * 0.5
  },
  agreeContainer: {
    paddingTop: 10,
    flexDirection: "row"
  },
  confirmButton: {
    paddingTop: unitHeight * 2
  },
  textButton: {}
});
