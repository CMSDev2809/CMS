import React, { Component } from "react";
import styles from "../styles";
import { Header } from "react-native-elements";

export default class Block extends Component {
  render() {
    return (
      <Header
        backgroundColor="#2a2a2a"
        placement="left"
        leftComponent={{
          text: "CMS Fast Referral",
          style: { color: "#fff" }
        }}
        rightComponent={{
          icon: "home",
          color: "#fff",
          onPress: () => this.props.setDisplay(0)
        }}
      />
    );
  }
}
