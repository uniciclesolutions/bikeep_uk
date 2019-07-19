import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Footer = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        display: "flex",
        flexDirection: "row"
      }}
    >
      <View
        style={{
          width: "25%",
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Ionicons name="md-menu" size={32} />
      </View>
      <View
        style={{
          width: "25%",
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Ionicons name="md-bicycle" size={32} />
      </View>
      <View
        style={{
          width: "25%",
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Ionicons name="md-person" size={32} />
      </View>
      <View
        style={{
          width: "25%",
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Ionicons name="md-card" size={32} />
      </View>
    </View>
  );
};
export default Footer;
