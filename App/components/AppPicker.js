import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, onSelect, placeholder, style, selectItem, width = "100%" }) {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisibleModal(true)}>
        <View style={[styles.container, style, {width: width}]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={30}
              color={colors.dark}
              style={styles.icon}
            />
          )}
          {selectItem ? (
            <AppText style={styles.text}>{selectItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <AppText style={styles.text}></AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color={colors.lightGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={visibleModal}>
        <Screen>
          <Button title="Close" onPress={() => setVisibleModal(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setVisibleModal(false);
                  onSelect(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    borderRadius: 25,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    flex: 1,
    color: colors.lightGray,
    fontSize: 18,
    justifyContent: "center",
  },
  text: {
    flex: 1,
    color: colors.dark,
    fontSize: 18,
    justifyContent: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppPicker;
