import React, { Component } from "react";
import { connect } from "react-redux";
import MicroService from "../MicroService/micro_service";
import MicroServiceBar from "../MicroServiceBar/micro_service_bar";
import "./micro_services_container.css";

class MicroServicesContainer extends Component {
  render() {
    const delayInc = 150;
    const colsPerRow = 3;
    const microServices = [
      <MicroService
        useIcons={this.props.useIcons ? true : false}
        simple={this.props.simple}
        img={1}
        title={`GPS`}
        text={`Monitor offenders using geosynchronous tracking.`}
        link={"/services-gps"}
      />,
      <MicroService
        useIcons={this.props.useIcons ? true : false}
        simple={this.props.simple}
        img={2}
        title={`House Arrest`}
        text={`Enforce movement restrictions within a fixed perimeter.`}
        link={"/services-house_arrest"}
      />,
      <MicroService
        useIcons={this.props.useIcons ? true : false}
        simple={this.props.simple}
        img={3}
        title={`Scram CAM`}
        text={`Track sobriety with transdermal alcohol monitoring.`}
        link={"/services-scram"}
      />,
      <MicroService
        useIcons={this.props.useIcons ? true : false}
        simple={this.props.simple}
        img={4}
        title={`Scram Remote Breath`}
        text={`Daily convenient and portable breath testing.`}
        link={"/services-remote_breath"}
      />,
      <MicroService
        useIcons={this.props.useIcons ? true : false}
        simple={this.props.simple}
        img={5}
        title={`Drug Patch`}
        text={`Continuous transdermal drug monitoring.`}
        link={"/services-drug_patch"}
      />,
      <MicroService
        useIcons={this.props.useIcons ? true : false}
        simple={this.props.simple}
        img={6}
        title={`Pre-Trial Supervision`}
        text={`Helping offenders stay on track.`}
        link={"/services-pretrial_supervision"}
      />,
      <MicroService
        useIcons={this.props.useIcons ? true : false}
        simple={this.props.simple}
        img={7}
        title={`Urinalysis Drug Testing`}
        text={`Comprehensive and precise UA drug testing.`}
        link={"/services-urinalysis"}
      />
    ];
    return (
      <div className="micro_services_container">
        <MicroServiceBar
          hideServiceText={this.props.hideServiceText}
          simple={this.props.simple}
          services={microServices}
          title={"Products and Services"}
          subTitle={`Offering the most trusted programs with the most accurate products, CMS' ankle bracelet, drug patch and onsite drug testing programs are leading Montana's monitoring services. When the need to find the reliable testing and monitoring, turn to Compliance Monitoring Systems.`}
          colsPerRow={colsPerRow}
          delayInc={delayInc}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  MicroServicesContainer
);
