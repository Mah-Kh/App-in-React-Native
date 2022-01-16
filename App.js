import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import FlexBox from "./pages/FlexBox";
import Dashboard from "./pages/Dashboard";
import Hospitals from "./pages/Hospitals";
import HospitalDetail from "./pages/HospitalDetail";

export default function App() {
  // const [text, setText] = useState("Welcome! If you are ready please confirm");

  const Stack = createNativeStackNavigator();

  return (
    // useState example
    // <View style={styles.container}>
    //   <Text>{text}</Text>
    //   <Button title="confirm" onPress={() => setText("Greate!")} />
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerTitle: "Dashboard" }}
        />
        <Stack.Screen
          name="Hospitals"
          component={Hospitals}
          options={{ headerTitle: "Hospitals" }}
        />
        <Stack.Screen
          name="HospitalDetail"
          component={HospitalDetail}
          options={{ headerTitle: "HospitalDetail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
