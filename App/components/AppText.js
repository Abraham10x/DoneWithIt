import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children }) {
  return <Text style={style.text}>{children}</Text>;
}

const style = StyleSheet.create({
  text: {
    fontSize: 10,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
        color: "blue",
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 30,
        color: "maroon",
      },
    }),
  },
});

export default AppText;
