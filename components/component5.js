import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  FlatList,
  TouchableHighlight
} from "react-native";

export default class Component5 extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json()
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Component5</Text>
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

AppRegistry.registerComponent("Component5", () => Component5);
