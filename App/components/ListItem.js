import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  showChevrons,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={colors.medium}
          onPress={onPress}
        >
          <View style={styles.container}>
            <View style={styles.contain}>
              <Image style={styles.image} source={image} alt="profile" />
              <View style={styles.textContainer}>
                <AppText numberOfLines={1}>{title}</AppText>
                {subTitle && <AppText numberOfLines={2}>{subTitle}</AppText>}
              </View>
            </View>
            {showChevrons === true && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                style={styles.chevron}
                color={colors.lightGray}
              />
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 4,
    padding: 15,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
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
  chevron: {
    justifyContent: "center",
    alignSelf: "center",
  },
});
export default ListItem;
