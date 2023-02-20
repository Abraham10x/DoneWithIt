import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
function Card({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} alt={image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.price]}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
  },
  card: {
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    paddingBottom: 25,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    color: "#000000",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
    paddingLeft: 15,
  },
  price: {
    fontSize: 18,
    paddingLeft: 15,
    fontWeight: "500",
    color: colors.secondary,
  },
});

export default Card;
