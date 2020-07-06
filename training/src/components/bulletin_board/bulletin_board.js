import React from "react";
import "./bulletin_board.css";

export default function BulletinBoard(props) {
  return (
    <div className={"bulletin_board"}>
      <img src={require("../../img/bulletin_board.png")} />
      <div className={"title"}>
        <h1>Bulletin Board</h1>
      </div>
      <div className={"wrapper"}>
        <div className={"text"}>
          <h2>{props.data}</h2>
        </div>
      </div>
    </div>
  );
}
