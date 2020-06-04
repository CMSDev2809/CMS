import React from "react";
import ReactTooltip from "react-tooltip";
import Info from "./locations.json";
import LocationList from "../../../../locationList";
import "./interactive_map.css";

const Pin = (props) => (
  <div
    className={"pin"}
    style={{
      left: `${Info[props.location].coords.x}%`,
      top: `${Info[props.location].coords.y}%`,
      opacity: Info[props.location].showing ? 1 : 0,
    }}
    data-tip
    data-for={`${props.location}-pin`}
  />
);

const build = (location) => (
  <div>
    <ReactTooltip id={`${location}-pin`} effect={"solid"}>
      <h1>{LocationList[location].locationName}</h1>
      <div style={{ textAlign: "left" }}>
        <h3>Address: {LocationList[location].address.firstLine}</h3>
        <h3>{LocationList[location].address.secondLine}</h3>
        <h3>
          Office Number:{" "}
          {LocationList[location].contactInformation.officeNumber}
        </h3>
        {LocationList[location].contactInformation.faxNumber ? (
          <h3>
            Fax Number: {LocationList[location].contactInformation.faxNumber}
          </h3>
        ) : null}
        {LocationList[location].officeEmail ? (
          <h3>Email: {LocationList[location].officeEmail}</h3>
        ) : null}
      </div>
    </ReactTooltip>
    <Pin location={location} />
  </div>
);

export default function InteractiveMap(props) {
  return (
    <div className={"interactive_map"}>
      <img src={require("../../img/state_map.png")} />
      {Object.keys(Info).map((key) => build(key))}
    </div>
  );
}
