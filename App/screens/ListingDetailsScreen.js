import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={listing.image}
          alt={listing.title}
        />
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}</Text>
      </View>
      <View style={styles.user}>
        <Image
          style={styles.profile}
          source={require("../assets/mosh.jpg")}
          alt="jacket"
        />
        <View style={styles.textRow}>
          <Text style={styles.username}>Mosh Hamedani</Text>
          <Text style={styles.listing}>5 Listings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  card: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 25,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    color: "#000000",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
    paddingLeft: 15,
  },
  price: {
    color: "lightgreen",
    fontSize: 18,
    paddingLeft: 15,
    fontWeight: "500",
  },
  user: {
    flexDirection: "row",
    rowGap: 10,
    marginHorizontal: 15,
    alignContent: "center",
    marginTop: 20,
  },
  profile: {
    borderRadius: 40,
    width: 70,
    height: 70,
  },
  username: {
    fontWeight: "500",
    fontSize: 18,
  },
  listing: {
    fontSize: 16,
    color: "grey",
  },
  textRow: {
    marginVertical: 5,
    marginLeft: 10,
  },
});

export default ListingDetailsScreen;
