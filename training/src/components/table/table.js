import React from "react";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import InboxIcon from "@material-ui/icons/MoveToInbox";
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
            label: "Program Title"
          }
        ]}
        data={[
          {
            item: "SCRAM Monitoring"
          }
        ]}
        dial={<div />}
        selectionDial={<div />}
      />
    </div>
  );
}
