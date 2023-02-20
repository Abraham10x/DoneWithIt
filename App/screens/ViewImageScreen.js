import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <View>
          <MaterialCommunityIcons color={"#FFFFFF"} name="close" size={30} />
        </View>
        <View>
          <MaterialCommunityIcons
            color={"#FFFFFF"}
            name="trash-can-outline"
            size={30}
          />
        </View>
      </View>
      <View style={styles.logo}>
        <Image
          source={require("../assets/chair.jpg")}
          resizeMode="contain"
          style={{ width: 500, height: 500 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  welcome: {
    flex: 1,
  },
  logo: {
    flexDirection: "column",
    paddingTop: 70,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 0.3,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
