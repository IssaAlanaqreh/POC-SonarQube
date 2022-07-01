import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const loop = () => {
    for (let i = 0; i < 10; i++) {
      console.log("i is " + i);
      break;
    }
  };

  const check = (a, b) => {
    return a == b;
  };

  useEffect(() => {
    check(1, 2);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
