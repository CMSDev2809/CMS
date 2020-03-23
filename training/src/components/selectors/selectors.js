import React from "react";
import { HCard, FontAwesomeIcon } from "arclight-react";
import IconIndex from "./icon_index";
import "./selectors.css";

const Card = props => (
  <div
    className={"card"}
    onMouseEnter={() => props.setHover(props.activeIndex)}
    onMouseLeave={() => props.setHover(0)}
    onClick={() => props.onClick()}
    style={{
      background: `linear-gradient(
    180deg,
    ${props._innerColor} 0%,
    ${props._outerColor} 100%
  )`,
      opacity: props.hover === props.activeIndex || !props.hover ? 1 : 0.15
    }}
  >
    <div className={"content"}>
      {console.log(props)}
      {props.img.type === "icon" ? (
        <FontAwesomeIcon
          style={"a"}
          data={{
            img: props.img.img,
            type: "solid",
            size: "85%"
          }}
        />
      ) : (
        <img src={props.img.img} />
      )}
      <h1>{props.title.split(".")[0]}</h1>
    </div>
  </div>
);

const openContent = object => {
  javascipt: window.open(object.url);
};

export default function Selectors(props) {
  const rowMax = 3;
  const [hover, setHover] = React.useState(0);
  const [_outerColor, _innerColor] = [
    `rgba(255, 255, 255, 1)`,
    `rgba(255, 255, 255, 1)`
  ];
  let content = [];
  let cards = [];
  Object.values(props.node).map((el, index) => {
    const img =
      IconIndex[el.url ? el.title.split(".")[1] : el.title.toLowerCase()];
    cards.push(
      <Card
        onClick={() =>
          el.url ? openContent(el) : props.setNode(el.children, el.title)
        }
        activeIndex={index + 1}
        title={el.title.replace("_", " ")}
        img={img ? img : IconIndex["_default"]}
        setHover={i => setHover(i)}
        _outerColor={_outerColor}
        _innerColor={_innerColor}
        hover={hover}
      />
    );
    if ((index + 1) % rowMax === 0) {
      content.push(
        <HCard
          style={"a"}
          data={{
            content: cards
          }}
        />
      );
      cards = [];
    }
  });
  if (cards.length > 0) {
    content.push(
      <HCard
        style={"a"}
        data={{
          content: cards
        }}
      />
    );
  }
  return (
    <div className={"selectors"}>
      <div className={"content"}>
        {content.length > 0 ? content : <h1>Bummer</h1>}
      </div>
    </div>
  );
}
