import React from "react";
import { Selectors, Table } from "../../components";
import Button from "@material-ui/core/Button";
import "./router.css";

export default function Router(props) {
  return (
    <Selectors
      node={props.node}
      setNode={(node, url) => props.setNode(node, url)}
    />
  );
}
