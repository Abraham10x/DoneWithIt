import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ image, title, subTitle, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} alt="profile" />
            <View style={styles.textContainer}>
              <AppText>{title}</AppText>
              <AppText>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 4,
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginVertical: 10,
    marginLeft: 8,
  },
});
export default ListItem;
