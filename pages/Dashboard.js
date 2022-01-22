import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Dashboard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: "gold" }]}
          onPress={() => props.navigation.navigate("Hospitals")}
        >
          <Text>Hospitals</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: "tomato" }]}
          onPress={() => props.navigation.navigate("Hospitals")}
        >
          <Text>Form</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: "dodgerblue" }]}
          onPress={() => props.navigation.navigate("Hospitals")}
        >
          <Text>Pharmacies</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: "green" }]}
          onPress={() => props.navigation.navigate("Hospitals")}
        >
          <Text>News</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => props.navigation.navigate("Profile")}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => props.navigation.navigate("Hospitals")}
        >
          <Text>6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    height: 200,
    width: "50%",
    padding: 10,
  },
  touchable: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    flex: 1,
    borderRadius: 10,
  },
});
