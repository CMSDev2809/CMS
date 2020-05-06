import React from "react";
import Button from "@material-ui/core/Button";
import "./header.css";

const _createCrumbs = () => {
  let array = window.location.href.split("/");
  array = array.splice(3, array.length);
  return array.map((el, i) =>
    i < array.length - 1 ? el.replace(/_/g, " ") + " > " : el.replace(/_/g, " ")
  );
};

export default function Header(props) {
  return (
    <div>
      <div className={"header"}>
        <div className={"content"}>
          <div className={"img"}>
            <img src={require("../../img/icon.png")} />
          </div>
          <table>
            <tbody>
              <tr>
                <td
                  onClick={() => {
                    props.setNode(props.directory);
                    let array = window.location.href.split("/");
                    array = array.slice(0, 3);
                    window.history.replaceState(null, null, array.join("/"));
                  }}
                >
                  Home
                </td>
                <td
                  onClick={() => {
                    props.setNode(props.directory.Forms.children);
                    let array = window.location.href.split("/");
                    array = array.slice(0, 3);
                    window.history.replaceState(
                      null,
                      null,
                      array.join("/") + "/Forms"
                    );
                  }}
                >
                  Forms
                </td>
                <td
                  onClick={() => {
                    props.setNode(props.directory.New_Hire_Training.children);
                    let array = window.location.href.split("/");
                    array = array.slice(0, 3);
                    window.history.replaceState(
                      null,
                      null,
                      array.join("/") + "/New_Hire_Training"
                    );
                  }}
                >
                  <div style={{ width: "275px" }}>New Hire Training</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
