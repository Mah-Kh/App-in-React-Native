import React from "react";
import { Text, View } from "react-native";

const HospitalDetail = (props) => {
  return (
    <View>
      <Text>{props.route.params.hospital.title}</Text>
      <Text>{props.route.params.hospital.phoneNo}</Text>
    </View>
  );
};

export default HospitalDetail;
