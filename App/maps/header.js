import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = props => {
  return (
    <View
      style={{
        width: "100%",
        height: 80,
        backgroundColor: "#F2F2F2",

        display: "flex",
        flexDirection: "row"
      }}
    >
      <View
        style={{
          width: "50%",
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Ionicons
          style={{ display: "flex", justifyContent: "flex-start" }}
          name="md-menu"
          size={32}
        />
      </View>
      <View
        style={{
          width: "50%",
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Ionicons name="md-bicycle" size={32} />
      </View>
    </View>
  );
};

export default Header;
