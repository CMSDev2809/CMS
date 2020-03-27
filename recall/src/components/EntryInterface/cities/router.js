import React, { Component } from "react";
import montana from "./montana.js";

export default state => {
  switch (state) {
    case "MT":
      return montana;
    default:
      return <div>Empty</div>;
  }
};
