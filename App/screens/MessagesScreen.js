import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import { Swipeable } from "react-native-gesture-handler";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialValues = [
  {
    id: 1,
    title: "Abraham",
    subTitle: "How are you?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Isreal",
    subTitle: "Who are you?",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialValues);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (messages) => {
    setMessages(messages.filer((m) => m.id !== messages.id));
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            onPress={() => console.log("Displayed Message", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        renderRightActions={() => (
          <ListItemDeleteAction onPress={handleDelete(messages)} />
        )}
        refreshing={refreshing}
        onRefresh={setRefreshing([
          {
            id: 2,
            title: "Isreal",
            subTitle: "Who are you?",
            image: require("../assets/mosh.jpg"),
          },
        ])}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
export default MessagesScreen;
