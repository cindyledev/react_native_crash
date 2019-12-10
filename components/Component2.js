import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

export default class Component2 extends Component {
  onPress() {
    console.log("Area Pressed");
  }

  onPress2() {
    console.log("Area 2 Pressed");
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.myText}>Hello Cindy</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight onPress={this.onPress} underlayColor="blue">
            <View style={styles.v1}>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity onPress={this.onPress2}>
            <View style={styles.v2}>
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.v3}>
            <Text>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100
  },
  myText: {
    color: "blue"
  },
  v1: {
    flex: 1,
    backgroundColor: "red",
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: "green",
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: "black",
    padding: 10
  }
});

AppRegistry.registerComponent("Component2", () => Component2);
