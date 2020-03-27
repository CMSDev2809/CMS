import React, { Component } from "react";
import { Text, View, Picker, ScrollView } from "react-native";
import {
  Image,
  Card,
  Input,
  Divider,
  CheckBox,
  Button,
  Overlay,
  Slider
} from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import DatePicker from "./my_date_picker";
import BackHandler from "../backButton";
import * as Animatable from "react-native-animatable";
import config from "../config";
import styles from "../styles";

export default class Form extends Component {
  componentWillMount() {
    BackHandler.handleAndroidBackButton(() =>
      this.state.showPanels !== undefined && this.state.showPanels === true
        ? this.setState({ showPanels: false })
        : this.props.setDisplay(0)
    );
  }

  componentWillUnmount() {
    BackHandler.removeAndroidBackButtonHandler();
  }

  state = {
    agency: "Child & Family Services",
    location: "Kalispell",
    zones: {
      inclusion: { on: false, values: ["", "", ""] },
      exclusion: { on: false, values: ["", "", ""] }
    },
    panels: {
      etg: false,
      std: false,
      ext: false,
      inst_6: false,
      inst_12: false
    },
    instCSS: {},
    uaFrequency: 0,
    comment: "",
    responseText: "Form submission successful!",
    date: new Date(),
    participant: "",
    caseWorker: "",
    caseNumber: "",
    spinner: false,
    service: "",
    pay: false,
    houseArrestState: {
      b1: false,
      b2: false,
      b3: false
    },
    houseArrestMovement: {
      b1: false,
      b2: false,
      b3: false,
      b4: false,
      b5: false
    },
    supervisionServices: {
      c1: false,
      c2: false,
      c3: false,
      c4: false,
      c5: false,
      c6: false,
      c7: false,
      c8: false
    },
    services247: {
      c1: false,
      c2: false,
      c3: false,
      c4: false
    }
  };

  zones(key) {
    const component = i => (
      <View style={styles.form_content_block} key={i}>
        <Input
          value={this.state.zones[key.toLowerCase()].values[i]}
          onChangeText={e => {
            let zones = this.state.zones;
            zones[key.toLowerCase()].values[i] = e;
            this.setState({ zones });
          }}
          placeholder={`${key} Zone Address`}
          shake={true}
        />
      </View>
    );
    const zones = this.state.zones[key.toLowerCase()].on ? (
      <View>
        {this.state.zones[key.toLowerCase()].values.map((el, i) =>
          component(i)
        )}
      </View>
    ) : null;
    return zones;
  }

  setter(index) {
    let title = "";
    let img = require("../assets/scram.png");
    switch (index) {
      case 1:
        title = "SCRAM Monitoring";
        img = require("../assets/scram.png");
        this.state.service = "scram";
        this.state.supervisionServices.c2 = true;
        break;
      case 2:
        title = "GPS Monitoring";
        img = require("../assets/gps.png");
        this.state.service = "gps";
        this.state.supervisionServices.c6 = true;
        break;
      case 3:
        title = "Drug Patch Monitoring";
        img = require("../assets/drug_patch.png");
        this.state.service = "drug_patch";
        this.state.services247.c1 = true;
        break;
      case 4:
        title = "Urinalysis";
        img = require("../assets/urinalysis.png");
        this.state.service = "urinalysis";
        this.state.services247.c2 = true;
        break;
      case 5:
        title = "House Arrest Monitoring";
        img = require("../assets/house_arrest.png");
        this.state.service = "house_arrest";
        this.state.supervisionServices.c5 = true;
        break;
    }
    return (
      <View style={styles.form_header}>
        <Image
          style={{
            width: "100%"
          }}
          source={img}
        />
        <Text style={styles.form_header_text}>{title}</Text>
      </View>
    );
  }

  validate() {
    let valid = false;
    if (this.state.participant.length > 0 && this.state.caseWorker.length > 0) {
      if (this.props.service === 4) {
        if (Object.values(this.state.panels).some(el => el)) {
          valid = true;
        }
      } else {
        valid = true;
      }
    }
    return {
      valid,
      css: {
        opacity: 0.25
      }
    };
  }

  async submitReferral() {
    const setUA = () => {
      if (this.props.service === 4) {
        return `${this.state.panels.std ? "Standard Panel" : ""}${
          this.state.panels.inst_6 ? "Instant 6-Panel" : ""
        }${this.state.panels.ext ? "Extended Panel" : ""}${
          this.state.panels.inst_12 ? "Instant 12-Panel" : ""
        }${this.state.panels.etg ? " + EtG" : ""}<br/>`;
      } else {
        return "<br/>";
      }
    };
    let _zones = () => {
      let inc = "Inclusion Zones:<br/>";
      let exc = "Exclusion Zones:<br/>";
      this.state.zones.exclusion.values.map(el => console.log(el));
      this.state.zones.inclusion.values.map(el =>
        el.length > 0 ? (inc += `${el}<br/>`) : ""
      );
      this.state.zones.exclusion.values.map(el =>
        el.length > 0 ? (exc += `${el}<br/>`) : ""
      );
      return (
        (this.state.zones.inclusion.values.some(el =>
          el.length > 0 ? true : false
        )
          ? inc
          : "") +
        (this.state.zones.exclusion.values.some(el =>
          el.length > 0 ? true : false
        )
          ? exc
          : "")
      );
    };
    _zones = _zones();
    const body = Object.assign(this.state, {
      location: this.state.location,
      gridValues: {
        pretrialState: 2,
        date: new Date().toString().split("T")[0],
        name: this.state.participant,
        phoneNumber: "",
        charges: "",
        caseNumber: this.state.caseNumber,
        toEnrollBy: this.state.date.toString().split("T")[0],
        programLength: "",
        court: this.state.location + " " + this.state.agency,
        judge: "",
        address: "",
        violationsReportedTo: this.state.caseWorker
      },
      uaDropDown: "week",
      dropDownValue:
        this.props.service === 3 || this.props.service === 4
          ? "24.7 Program Services"
          : "Supervision Services",
      txtBox: {
        frequency: "3",
        ua: this.state.uaFrequency,
        other: ""
      },
      commentBoxText: `${
        this.state.pay ? "Self Pay" : "Agency Pay"
      }<br/>${setUA()}${this.state.comment}${_zones}`,
      attachedForm: false
    });
    this.setState({ spinner: true });
    const response = await new Promise(async (resolve, reject) => {
      setTimeout(() => resolve("Request timed out"), 10000);
      const res = await fetch(`${config.server_endpoint}/api/refer`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      resolve(res);
    });
    this.setState({ spinner: false, overlay: true });
  }

  render() {
    console.log(
      this.state.zones.inclusion.values,
      this.state.zones.exclusion.values
    );
    let validateObj = this.validate();
    let instantStyle = { ...styles.form_content_block };
    instantStyle = Object.assign(instantStyle, this.state.instCSS);
    return (
      <ScrollView style={styles.form}>
        <Animatable.View
          style={styles.services_button_wrapper}
          animation="bounceIn"
        >
          <Spinner
            visible={this.state.spinner}
            textContent={"Sending"}
            textStyle={styles.spinnerTextStyle}
          />
          <Overlay
            height="35%"
            isVisible={
              this.state.overlay !== undefined ? this.state.overlay : false
            }
          >
            <View style={styles.overlay}>
              <View style={styles.overlay_wrapper}>
                <Text style={styles.overlay_text}>
                  {this.state.responseText}
                </Text>
              </View>
              <View style={styles.overlay_wrapper}>
                <Button
                  raised
                  buttonStyle={styles.form_submit_button}
                  title="Okay"
                  type="solid"
                  onPress={() => {
                    this.setState({ overlay: false });
                    this.props.setDisplay(0);
                  }}
                />
              </View>
            </View>
          </Overlay>
          {this.setter(this.props.service)}
          <View style={{ height: 50 }} />
          <View style={styles.form_content}>
            <View style={styles.form_content_block}>
              <Text>Enrollment Date</Text>
              <DatePicker />
            </View>
            <View style={styles.form_content_block}>
              <Input
                onChangeText={e => {
                  this.setState({ participant: e });
                }}
                placeholder="Participant"
                shake={true}
              />
            </View>
            <View style={styles.form_content_block}>
              <Input
                onChangeText={e => {
                  this.setState({ caseWorker: e });
                }}
                placeholder="Case Worker Email"
                shake={true}
              />
            </View>
            <View style={styles.form_content_block}>
              <Input
                onChangeText={e => {
                  this.setState({ caseNumber: e });
                }}
                placeholder="Case Number (Optional)"
                shake={true}
              />
            </View>
            <View style={styles.form_content_block}>
              <Input
                multiline={true}
                onChangeText={e => {
                  this.setState({ comment: e });
                }}
                placeholder="Comments (Optional)"
                shake={true}
              />
            </View>
            <View style={styles.form_content_block}>
              <Text>Location</Text>
              <Picker
                selectedValue={this.state.location}
                style={{ height: 50, width: "100%" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ location: itemValue })
                }
              >
                <Picker.Item label="Kalispell" value="Kalispell" />
                <Picker.Item label="Missoula" value="Missoula" />
              </Picker>
            </View>
            <View style={styles.form_content_block}>
              <Text>Agency</Text>
              <Picker
                selectedValue={this.state.agency}
                style={{ height: 50, width: "100%" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ agency: itemValue })
                }
              >
                <Picker.Item
                  label="Child & Family Services"
                  value="Child & Family Services"
                />
                <Picker.Item label="District Court" value="District Court" />
                <Picker.Item label="Justice Court" value="Justice Court" />
              </Picker>
            </View>
            {this.props.service === 2 ? (
              <View style={styles.form_content_block}>
                <Overlay
                  isVisible={
                    this.state.showPanels !== undefined
                      ? this.state.showPanels
                      : false
                  }
                  height="65%"
                >
                  <View style={styles.overlay}>
                    <ScrollView>
                      <View style={styles.form_content_block}>
                        <CheckBox
                          title="Inclusion Zone(s)"
                          checked={this.state.zones.inclusion.on}
                          onPress={() => {
                            let zones = this.state.zones;
                            zones.inclusion.on = !this.state.zones.inclusion.on;
                            this.setState({ zones });
                          }}
                        />
                      </View>
                      {this.zones("Inclusion")}
                      <View style={styles.form_content_block}>
                        <CheckBox
                          title="Exclusion Zone(s)"
                          checked={this.state.zones.exclusion.on}
                          onPress={() => {
                            let zones = this.state.zones;
                            zones.exclusion.on = !this.state.zones.exclusion.on;
                            this.setState({ zones });
                          }}
                        />
                      </View>
                      {this.zones("Exclusion")}
                    </ScrollView>
                    <View style={styles.form_content_block}>
                      <Button
                        raised
                        buttonStyle={styles.form_submit_button}
                        title="Done"
                        type="solid"
                        onPress={() => this.setState({ showPanels: false })}
                      />
                    </View>
                  </View>
                </Overlay>
                <Button
                  raised
                  buttonStyle={styles.form_submit_button}
                  title="Inclusion/Exclusion Zones"
                  type="solid"
                  onPress={() => this.setState({ showPanels: true })}
                />
              </View>
            ) : null}
            {this.props.service === 4 ? (
              <View style={styles.form_content_block}>
                <Overlay
                  isVisible={
                    this.state.showPanels !== undefined
                      ? this.state.showPanels
                      : false
                  }
                  height="85%"
                >
                  <View style={styles.overlay}>
                    <View style={styles.form_content_block}>
                      <CheckBox
                        title="Lab EtG"
                        checked={this.state.panels.etg}
                        onPress={() => {
                          let panels = this.state.panels;
                          panels.etg = !this.state.panels.etg;
                          this.setState({ panels });
                        }}
                      />
                    </View>
                    <View style={styles.form_content_block}>
                      <CheckBox
                        title="Lab Standard Panel"
                        checked={this.state.panels.std}
                        onPress={() => {
                          let panels = this.state.panels;
                          panels.std = !this.state.panels.std;
                          panels.ext = false;
                          this.setState({ panels });
                        }}
                      />
                    </View>
                    <View style={styles.form_content_block}>
                      <CheckBox
                        title="Lab Extended Panel"
                        checked={this.state.panels.ext}
                        onPress={() => {
                          let panels = this.state.panels;
                          panels.ext = !this.state.panels.ext;
                          panels.std = false;
                          this.setState({ panels });
                        }}
                      />
                    </View>
                    <View style={instantStyle}>
                      <CheckBox
                        title="Instant 6 Panel"
                        checked={this.state.panels.inst_6}
                        onPress={() => {
                          if (this.state.uaFrequency < 1) {
                            let panels = this.state.panels;
                            panels.inst_6 = !this.state.panels.inst_6;
                            panels.inst_12 = false;
                            this.setState({ panels });
                          }
                        }}
                      />
                    </View>
                    <View style={instantStyle}>
                      <CheckBox
                        title="Instant 12 Panel"
                        checked={this.state.panels.inst_12}
                        onPress={() => {
                          if (this.state.uaFrequency < 1) {
                            let panels = this.state.panels;
                            panels.inst_6 = false;
                            panels.inst_12 = !this.state.panels.inst_12;
                            this.setState({ panels });
                          }
                        }}
                      />
                    </View>
                    <View style={styles.form_content_block}>
                      <Text>
                        {this.state.uaFrequency > 0
                          ? `${this.state.uaFrequency}x / week recurring`
                          : "One time only"}
                      </Text>
                      <Slider
                        value={this.state.uaFrequency}
                        step={1}
                        minimumValue={0}
                        maximumValue={4}
                        onValueChange={uaFrequency => {
                          if (uaFrequency > 0) {
                            let panels = this.state.panels;
                            panels.inst_6 = false;
                            panels.inst_12 = false;
                            this.state.panels = panels;
                          }
                          this.setState({
                            uaFrequency,
                            instCSS:
                              uaFrequency > 0
                                ? { opacity: 0.25 }
                                : { opacity: 1 }
                          });
                        }}
                      />
                      <Text>(Slide to change frequency)</Text>
                    </View>
                    <View style={styles.form_content_block}>
                      <Button
                        raised
                        buttonStyle={styles.form_submit_button}
                        title="Done"
                        type="solid"
                        onPress={() => this.setState({ showPanels: false })}
                      />
                    </View>
                  </View>
                </Overlay>
                <Button
                  raised
                  buttonStyle={styles.form_submit_button}
                  title="See Panels"
                  type="solid"
                  onPress={() => this.setState({ showPanels: true })}
                />
              </View>
            ) : null}
            <View style={styles.form_content_block}>
              <CheckBox
                title="Self Pay"
                checked={this.state.pay}
                onPress={() => this.setState({ pay: true })}
              />
            </View>
            <View style={styles.form_content_block}>
              <CheckBox
                title="Agency Pay"
                checked={!this.state.pay}
                onPress={() => this.setState({ pay: false })}
              />
            </View>
            <View style={styles.form_content_block}>
              <Button
                raised
                buttonStyle={
                  validateObj.valid
                    ? styles.form_submit_button
                    : Object.assign(validateObj.css, styles.form_submit_button)
                }
                title="Submit"
                type="solid"
                onPress={() =>
                  validateObj.valid ? this.submitReferral() : null
                }
              />
            </View>
          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}
