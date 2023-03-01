import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

function AccountItem({ icon, style, title, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.icon, style]}>
          <MaterialCommunityIcons name={icon} size={25} color={colors.white} />
        </View>
        <View style={styles.textContainer}>
          <AppText>{title}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 4,
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: 8,
    marginLeft: 12,
  },
});

export default AccountItem;
