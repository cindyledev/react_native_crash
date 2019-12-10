import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

const users = [
  { name: "John Doe" },
  { name: "Cindy Le" },
  { name: "Steve Smith" },
  { name: "Janet Williams" }
];

export default class Component4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Component4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

AppRegistry.registerComponent("Component4", () => Component4);
