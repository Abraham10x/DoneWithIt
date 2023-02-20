import React from "react";
import { Button, Platform, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppButton(props) {
  return <Button title={props.title} style={styles.button} />;
}

const styles = StyleSheet.create({
  button: {
    color: "#ffffff",
    width: "100%",
    height: "100%",
    fontSize: 18,
    ...Platform.select({
      android: {
        backgroundColor: props.color,
      },
    }),
  },
});

export default AppButton;
