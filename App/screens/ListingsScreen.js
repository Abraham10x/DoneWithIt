import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import { View } from "react-native";

const products = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale",
    subtitle: "$100",
  },
  {
    id: 2,
    image: require("../assets/chair.jpg"),
    title: "Couch in great condition",
    subtitle: "$1000",
  },
];

function ListingsScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) => (
            <Card
              image={item.image}
              title={item.title}
              subTitle={item.subtitle}
            />
          )}
          // ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  separator: {
    paddingVertical: 8,
  },
});

export default ListingsScreen;
