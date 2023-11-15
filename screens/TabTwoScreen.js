import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import {
  WheelPicker,
  TimePicker,
  DatePicker
} from "react-native-wheel-picker-android";
import React, { Component } from "react";
import { AppRegistry, Button } from "react-native";

const wheelPickerData = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday"
];

export default function TabTwoScreen() {

  state = {
    selectedItem: 0
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  onPress = () => {
    this.setState({ selectedItem: 3 });
  };

  return (
    <View style={styles.container}>
    <Button title={"Select third element"} onPress={this.onPress} />
    <Text>Selected position: {this.state.selectedItem}</Text>
    <WheelPicker
      selectedItem={this.state.selectedItem}
      data={wheelPickerData}
      onItemSelected={this.onItemSelected}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  icons:{
    flexDirection :"row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  back:{
    width: '29.801px',
    height: '30.1px',
    flexShrink: 0

  },
  setting:{
    width: '24px',
    height: '24px',
    flexShrink: 0
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
