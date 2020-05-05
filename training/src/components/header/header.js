import React from "react";
import Button from "@material-ui/core/Button";
import "./header.css";

const _createCrumbs = () => {
  const array = window.location.href.split("/").splice(0, 3);
  array.map((el, i) =>
    i < array.length - 1 ? el.replace(/_/g, " ") + " > " : el.replace(/_/g, " ")
  );
};

export default function Header() {
  return (
    <div>
      <div className={"header"}>
        <div className={"content"}>
          <div className={"img"}>
            <img
              onClick={() => (window.location = "/")}
              src={require("../../img/icon.png")}
            />
          </div>
          <div className={"title"}>
            <h2>Compliance Monitoring Systems</h2>
          </div>
          <div className={"crumbs"}>
            <h2>{_createCrumbs()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
