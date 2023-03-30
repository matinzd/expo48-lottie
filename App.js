import AnimatedLottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        style={{ width: 400, height: 400, backgroundColor: "red" }}
        source={{
          uri: "https://raw.githubusercontent.com/lottie-react-native/lottie-react-native/master/apps/paper/src/animations/Watermelon.json",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
