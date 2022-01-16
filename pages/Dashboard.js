import React from "react";
import { Button, Text, View } from "react-native";

const Dashboard = (props) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="Hospitals"
        onPress={() => props.navigation.navigate("Hospitals")}
      />
    </View>
  );
};

export default Dashboard;
