import {
  Button,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.welcome}
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        blurRadius={10}
      >
        <View style={styles.logo}>
          <Image
            source={require("../assets/logo-red.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
          {/* <Button
            title="Login"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <Button
            title="Register"
            color="secondary"
            onPress={() => navigation.navigate(routes.REGISTER)}
          /> */}
          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate(routes.LOGIN)}
          >
            <Text style={styles.ButtonText}>Login</Text>
          </Pressable>
          <Pressable
            style={styles.registerButton}
            onPress={() => navigation.navigate(routes.REGISTER)}
          >
            <Text style={styles.ButtonText}>Register</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  welcome: {
    flex: 1,
  },
  logo: {
    flexDirection: "column",
    paddingTop: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 20,
    marginTop: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "column",
    flex: 0.3,
    justifyContent: "space-between",
    width: "100%",
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: colors.primary,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  ButtonText: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: 18,
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    marginBottom: 30,
    marginHorizontal: 20,
  },
});
