import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import AppText from "../components/AppText";
import Card from "../components/Card";

export default function Lessons() {
  const orientation = useDeviceOrientation();
  console.log(useDimensions);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text numberOfLines={1} onPress={() => console.log("hello")}>
        Open up App.js to start working on your app there are many people
        recieving money here in this world!
      </Text> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Image source={require("./assets/splash.png") } /> */}
      {/* <TouchableHighlight onPress={() => console.log("Clicked")}>
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        title="Enter"
        onPress={() =>
          Alert.alert("What is my name?", "is it Jeremy?", [
            { text: "Yes", onPress: () => console.log("Incorrect") },
            { text: "No", onPress: () => console.log("Correct") },
          ])
        }
      /> */}
      {/* <Button
        title="Question"
        onPress={() =>
          Alert.prompt("What is my name?", "is it Jeremy?", [
            { text: "Yes", onPress: () => console.log("Incorrect") },
            { text: "No", onPress: () => console.log("Correct") },
          ])
        }
      /> */}
      {/* <StatusBar style="auto" /> */}
      {/* <View
        style={{
          backgroundColor: "brown",
          width: "100%",
          height: orientation === "landscape" ? "100%" : "30%",
        }}
      ></View> */}
      {/* <View
        style={{
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 200,
            borderWidth: 4,
            borderColor: "grey",
            borderRadius: 8,
            padding: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "gold",
              width: 50,
              height: 50,
              margin: 10,
            }}
          ></View>
        </View>
        <View
          style={{
            backgroundColor: "yellow",
            width: 100,
            height: 200,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "tomato",
            width: 100,
            height: 200,
          }}
        ></View>
      </View>
      <Text
        style={{
          fontSize: 25,
          fontStyle: "italic",
          fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
          fontWeight: "700",
          textAlign: "center",
          color: "purple",
          textTransform: "capitalize",
          textDecorationLine: "underline",
          lineHeight: 40,
        }}
      >
        I love react native! This is my first react native app! here's some more
        text.
      </Text>
      <AppText>Hello World</AppText>
      <MaterialCommunityIcons name="email" size={30} /> */}
      <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
