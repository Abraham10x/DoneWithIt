import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.lightGray}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppTextInput;
