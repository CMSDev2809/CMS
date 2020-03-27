import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import BackHandler from "../backButton";
import styles from "../styles";

export default class Services extends Component {
  componentWillMount() {
    BackHandler.exitApp();
  }

  componentWillUnmount() {
    BackHandler.removeAndroidBackButtonHandler();
  }

  render() {
    let delay = 15;
    return (
      <View style={styles.services}>
        <View style={styles.services_block}>
          <Animatable.View
            style={styles.services_button_wrapper}
            animation="bounceInRight"
          >
            <Button
              raised
              buttonStyle={styles.services_button}
              title="SCRAM Monitoring"
              type="solid"
              onPress={() => this.props.setDisplay(1)}
            />
          </Animatable.View>
          <Animatable.View
            delay={(delay *= 2)}
            style={styles.services_button_wrapper}
            animation="bounceInLeft"
          >
            <Button
              raised
              buttonStyle={styles.services_button}
              title="GPS Monitoring"
              type="solid"
              onPress={() => this.props.setDisplay(2)}
            />
          </Animatable.View>
          <Animatable.View
            delay={(delay *= 2)}
            style={styles.services_button_wrapper}
            animation="bounceInRight"
          >
            <Button
              raised
              buttonStyle={styles.services_button}
              title="Drug Patch Monitoring"
              type="solid"
              onPress={() => this.props.setDisplay(3)}
            />
          </Animatable.View>
          <Animatable.View
            delay={(delay *= 2)}
            style={styles.services_button_wrapper}
            animation="bounceInLeft"
          >
            <Button
              raised
              buttonStyle={styles.services_button}
              title="Urinalysis"
              type="solid"
              onPress={() => this.props.setDisplay(4)}
            />
          </Animatable.View>
          <Animatable.View
            delay={(delay *= 2)}
            style={styles.services_button_wrapper}
            animation="bounceInRight"
          >
            <Button
              raised
              buttonStyle={styles.services_button}
              title="House Arrest"
              type="solid"
              onPress={() => this.props.setDisplay(5)}
            />
          </Animatable.View>
        </View>
      </View>
    );
  }
}
