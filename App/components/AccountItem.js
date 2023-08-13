import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function AccountItem({ IconComponent, title, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
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
  textContainer: {
    marginVertical: 8,
    marginLeft: 12,
  },
});

export default AccountItem;
