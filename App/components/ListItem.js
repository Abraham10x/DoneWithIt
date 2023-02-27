import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ image, title, subTitle, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} alt={image} />
        <View style={styles.textContainer}>
          <AppText>{title}</AppText>
          <AppText>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 4,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginVertical: 2,
    marginLeft: 3,
  },
});
export default ListItem;
