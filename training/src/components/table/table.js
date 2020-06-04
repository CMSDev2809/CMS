import React from "react";
import { SpeedDial, Table as Custom } from "arclight-react";
import "./table.css";

export default function Table(props) {
  return (
    <div className={"table"}>
      <Custom
        style={"a"}
        title={props.title}
        headCells={[
          {
            id: "item",
            numeric: false,
            label: "Program Title",
          },
        ]}
        data={[
          {
            item: "SCRAM Monitoring",
          },
        ]}
        dial={<div />}
        selectionDial={<div />}
      />
    </div>
  );
}
