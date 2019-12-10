import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

export default class Component6 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});

AppRegistry.registerComponent("Component6", () => Component6);
