import React, { Component } from "react";
import { Text, View, Picker } from "react-native";
import styles from "../styles";
import Header from "./header";
import { Button } from "react-native-elements";
import Services from "./services";
import Form from "./form";

export default class Base extends Component {
  state = {
    display: <Services setDisplay={index => this.setDisplay(index)} />
  };

  setDisplay(index) {
    this.setState({
      display:
        index > 0 ? (
          <Form service={index} setDisplay={index => this.setDisplay(index)} />
        ) : (
          <Services setDisplay={index => this.setDisplay(index)} />
        )
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header setDisplay={index => this.setDisplay(index)} />
        <View style={styles.body}>{this.state.display}</View>
      </View>
    );
  }
}
