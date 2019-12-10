import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cindy",
      showName: true,
      message: this.props.message
    };
  }

  static defaultProps = {
    message: "Hi there"
  };

  render() {
    let name = this.state.showName ? this.state.name : "No name";
    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});

AppRegistry.registerComponent("Component1", () => Component1);
