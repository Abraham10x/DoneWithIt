import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

function AppHeader({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "700",
    ...Platform.select({
      ios: {
        fontSize: 15,
        fontFamily: "Avenir",
        fontWeight: "700",
      },
      android: {
        fontSize: 15,
        fontFamily: "Roboto",
        fontWeight: "700",
      },
    }),
  },
});

export default AppHeader;
