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

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import ViewImageScreen from "./App/screens/ViewImageScreen";
import Lessons from "./App/screens/Lessons";
import ListingDetailsScreen from "./App/screens/ListingDetailsScreen";
import MyAccountScreen from "./App/screens/MyAccountScreen";
import MessagesScreen from "./App/screens/MessagesScreen";
import ListingsScreen from "./App/screens/ListingsScreen";
import LoginScreen from "./App/screens/LoginScreen";
import RegisterScreen from "./App/screens/RegisterScreen";

export default function App() {
  const orientation = useDeviceOrientation();
  console.log(useDimensions);
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Lessons /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <MyAccountScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <LoginScreen /> */}
      <RegisterScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
