import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";

export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
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

AppRegistry.registerComponent("myapp", () => myapp);
