import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    color: colors.black,
    ...Platform.select({
      ios: {
        fontSize: 14,
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 14,
      },
    }),
  },
});

export default AppText;
