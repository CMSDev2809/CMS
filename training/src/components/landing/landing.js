import React from "react";
import { HCard } from "arclight-react";
import { InteractiveMap, BulletinBoard } from "../../components";
import "./landing.css";

const _column1 = (cards) => {
  let rows = [];
  let content = [];
  cards.map((el, i) => {
    content.push(el);
    if ((i + 1) % 2 === 0) {
      rows.push(
        <div className={"card"}>
          <HCard
            style={"a"}
            data={{
              content,
            }}
          />
        </div>
      );
      content = [];
    }
  });
  if (content.length > 0) {
    content.push(<div />);
    rows.push(
      <div className={"card"}>
        <HCard
          style={"a"}
          data={{
            content,
          }}
        />
      </div>
    );
  }
  return (
    <div className={"column1"}>
      <img className={"logo"} src={require("../../img/icon.png")} />
      <h1>Quick Links</h1>
      {rows}
    </div>
  );
};

const _column2 = () => {
  return (
    <div>
      <div className={"column2"}>
        <table>
          <tbody>
            <tr>
              <td>
                <BulletinBoard style={{ marginBottom: "1000px" }} />
              </td>
            </tr>
            <tr>
              <td>
                <h1>Contact List</h1>
                <InteractiveMap />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function Landing(props) {
  return (
    <div className={"landing"}>
      <div className={"title"}>
        <h1>Compliance Monitoring Systems L.L.C.</h1>
      </div>
      <table align="center">
        <tbody>
          <tr>
            <td width={"450px"}>
              {_column1(props.cards.filter((el) => (el ? el : null)))}
            </td>
            <td>{_column2()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
