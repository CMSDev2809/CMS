import React from "react";
import Button from "@material-ui/core/Button";
import "./header.css";

export default function Header() {
  return (
    <div>
      <div className={"header"}>
        <div className={"content"}>
          <div className={"img"}>
            <img src={require("../../img/icon.png")} />
          </div>
          <div className={"title"}>
            <h2>Compliance Monitoring Systems</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
