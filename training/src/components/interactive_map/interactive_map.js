import React from "react";
import ReactTooltip from "react-tooltip";
import Info from "./locations.json";
import LocationList from "../../../../locationList";
import "./interactive_map.css";

const Pin = (props) => {
  return (
    <div
      className={"pin"}
      style={{
        left: `${props.data.coords.x}%`,
        top: `${props.data.coords.y}%`,
        opacity: props.data.showing ? 1 : 0,
      }}
      data-tip={"hello world"}
      data-effect={"solid"}
    />
  );
};

export default function InteractiveMap(props) {
  return (
    <div className={"interactive_map"}>
      <ReactTooltip />
      <img src={require("../../img/state_map.png")} />
      <Pin data={Info.missoula} />
    </div>
  );
}
