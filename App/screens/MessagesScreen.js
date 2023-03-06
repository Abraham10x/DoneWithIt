import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";

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
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            showChevrons={true}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            onPress={() => console.log("Displayed Message", item)}
            renderRightActions={() => {
              <ListItemDeleteAction onPress={() => handleDelete(messages)} />;
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Isreal",
              subTitle: "Who are you?",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
