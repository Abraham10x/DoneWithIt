import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppHeader from "../components/AppHeader";
import AccountItem from "../components/AccountItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";

const pages = [
  {
    id: 1,
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    id: 2,
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
  },
];

function MyAccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.profile}
          source={require("../assets/mosh.jpg")}
          alt="Mosh"
        />
        <View style={styles.user}>
          <AppHeader>Mosh Hamedani</AppHeader>
          <AppText>programmingwithmosh@gmail.com</AppText>
        </View>
      </View>
      <View>
        <FlatList
          style={styles.list}
          data={pages}
          keyExtractor={(pages) => pages.id.toString()}
          renderItem={({ item }) => (
            <AccountItem    
              title={item.title}
              IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
              onPress={() => console.log("hello", item)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.logOut}>
        <AccountItem
          IconComponent={<Icon name={"logout"} backgroundColor={colors.yellow}/>}
          title={"Log Out"}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 15,
  },

  profile: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  user: {
    paddingVertical: 5,
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center",
  },

  list: {
    backgroundColor: colors.white,
    padding: 5,
    marginVertical: 30,
  },

  logOut: {
    backgroundColor: colors.white,
    padding: 5,
  },
});

export default MyAccountScreen;
