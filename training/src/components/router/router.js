import React from "react";
import { Selectors, Table } from "../../components";
import "./router.css";

export default function Router(props) {
  return (
    <Selectors
      node={props.node}
      setNode={(node, url) => props.setNode(node, url)}
    />
  );
}
