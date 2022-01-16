import React from "react";
import { Text, View } from "react-native";

const FlexBox = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "80%",
        height: 200,
        alignItems: "stretch",
      }}
    >
      <View style={{ backgroundColor: "red", flex: 1 }}>
        <Text>1</Text>
      </View>
      <View style={{ backgroundColor: "blue", flex: 3 }}>
        <Text>2</Text>
      </View>
      <View style={{ backgroundColor: "green" }}>
        <Text>3</Text>
      </View>
    </View>
  );
};

export default FlexBox;
