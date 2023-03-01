import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 11,
    width: "100%",
    backgroundColor: colors.primary,
    marginTop: 20,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
