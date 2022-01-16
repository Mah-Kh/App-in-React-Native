import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Hospitals = (props) => {
  const dummyData = [
    {
      id: "1",
      title: "Hospital 1",
      phoneNo: "01231111",
    },
    {
      id: "2",
      title: "Hospital 2",
      phoneNo: "01232222",
    },
    {
      id: "3",
      title: "Hospital 3",
      phoneNo: "01233333",
    },
    {
      id: "4",
      title: "Hospital 4",
      phoneNo: "01234444",
    },
    {
      id: "5",
      title: "Hospital 5",
      phoneNo: "01235555",
    },
  ];
  return (
    <FlatList
      data={dummyData}
      ListHeaderComponent={
        <View style={styles.listHeader}>
          <Text>Name</Text>
          <Text>Phone</Text>
          <Text>...</Text>
        </View>
      }
      renderItem={(itemList) => (
        <TouchableOpacity
          style={styles.listRow}
          onPress={() => props.navigation.navigate("HospitalDetail", {hospital: itemList.item})}
        >
          <Text>{itemList.item.title}</Text>
          <Text>{itemList.item.phoneNo}</Text>
          <Text>...</Text>
        </TouchableOpacity>
      )}
      // [0] means the first ListHeaderComponent should be fix at top
      stickyHeaderIndices={[0]}
    />
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  listRow: {
    flexDirection: "row",
    padding: 10,
    margin: 5,
    backgroundColor: "#ccc",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  listHeader: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
});
