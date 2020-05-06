import React from "react";
import "./navigator.css";

let _depth = 0;

const piece = (title, zIndex, cb) => (
  <div
    className={"piece"}
    onClick={() => cb(_depth - zIndex - 1)}
    style={{ zIndex: 1000 - zIndex }}
  >
    <h2>{title}</h2>
    <div className={"triangle"}>
      <div className={"inner"} />
    </div>
  </div>
);

const _createCrumbs = cb => {
  let array = window.location.href.split("/");
  array = array.splice(3, array.length);
  return array.map(el =>
    el.length > 0 ? piece(el.replace(/_/g, " "), _depth++, cb) : null
  );
};

export default function Navigator(props) {
  let arr = _createCrumbs(props.reverseNode);
  arr.unshift(piece("CMS", 0, props.reverseNode));
  return <div className={"navigator"}>{arr}</div>;
}
