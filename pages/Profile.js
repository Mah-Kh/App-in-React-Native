import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Switch } from "react-native";

const Profile = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  const [selectGender, setSelectGender] = useState("male");

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="name"
          value={name}
          onChangeText={(input) => setName(input)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="age"
          keyboardType="numeric"
          value={age}
          onChangeText={(input) => setAge(input)}
        />
        <View style={styles.switch}>
          <Text>up 30</Text>
          <Switch
            value={isEnable}
            onValueChange={() => setIsEnable(!isEnable)}
          />
        </View>
        <View>
          <Text style={{ textAlign: "center", margin: 10 }}>Gender</Text>
          <Picker
            style={styles.picker}
            itemStyle={styles.itemPicker}
            selectedValue={selectGender}
            onValueChange={(itemValue, itemIndex) => setSelectGender(itemValue)}
          >
            <Picker.Item label="male" value="male" />
            <Picker.Item label="female" value="female" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  form: {
    width: "80%",
    backgroundColor: "#ddd",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "stretch",
  },
  textInput: {
    textAlign: "center",
    margin: 10,
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  picker: {
    height: 88,
  },
  itemPicker: {
    height: 44,
  },
});
