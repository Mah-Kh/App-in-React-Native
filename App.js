import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("Welcome! If you are ready please confirm");
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="confirm" onPress={() => setText("Greate!")} />
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
