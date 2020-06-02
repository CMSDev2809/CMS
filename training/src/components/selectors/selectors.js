import React from "react";
import { HCard, FontAwesomeIcon } from "arclight-react";
import IconIndex from "./icon_index";
import { Landing } from "../../components";
import "./selectors.css";

const Card = (props) => {
  let title = props.title.title.replace(/_/g, " ");
  if (props.title.isFile) {
    title = title.split(".");
    title = title.slice(0, title.length - 1).join(".");
  }
  return (
    <div
      className={"card"}
      onMouseEnter={() => props.setHover(props.activeIndex)}
      onMouseLeave={() => props.setHover(0)}
      onClick={() => props.onClick()}
      style={{
        opacity: props.hover === props.activeIndex || !props.hover ? 1 : 0.5,
      }}
    >
      <div className={"content"}>
        <img src={props.img} />
        <div className={"text"}>{title}</div>
      </div>
    </div>
  );
};

const HtmlCard = (props) => (
  <div
    className={"html-card"}
    style={{
      backgroundColor: `white`,
    }}
  >
    <div
      className={"content"}
      dangerouslySetInnerHTML={{ __html: props.url }}
    />
  </div>
);

const openContent = (object) => {
  javascipt: window.open(object.url);
};

export default function Selectors(props) {
  const rowMax = 3;
  const [hover, setHover] = React.useState(0);
  const [_outerColor, _innerColor] = [
    `rgba(255, 255, 255, 1)`,
    `rgba(255, 255, 255, 1)`,
  ];
  let content = [];
  let cards = [];
  let index = 0;
  Object.values(props.node).map((el) => {
    if (el.title) {
      if (el.title.toLowerCase().replace(/ /g, "_") !== "new_hire_training") {
        let _extension = el.title.split(".").pop().toLowerCase();
        const img = IconIndex[el.url ? _extension : el.title.toLowerCase()];
        if (el.url && _extension === "html") {
          cards.push(<HtmlCard url={el.url} />);
        } else {
          cards.push(
            <Card
              onClick={() =>
                el.url
                  ? el.url.toLowerCase().includes(".link")
                    ? window.open(el.url, "_blank")
                    : openContent(el)
                  : el.children && el.title
                  ? props.setNode(el.children, el.title)
                  : null
              }
              activeIndex={index + 1}
              title={{ title: el.title, isFile: el.url }}
              img={img ? img : IconIndex._defaultFolder}
              setHover={(i) => setHover(i)}
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
                  content: cards,
                }}
              />
            );
            cards = [];
          }
        }
        index++;
      }
    }
  });

  if (cards.length > 0) {
    const _len = cards.length;
    if (cards.length < 3) {
      for (let i = 0; i < 3 - _len; i++) {
        cards.push(<div />);
      }
    }
    content.push(
      <HCard
        style={"a"}
        data={{
          content: cards,
        }}
      />
    );
  }
  return (
    <div className={"selectors"}>
      <div className={"content"}>
        {content.length > 0 ? (
          props.node.__root__ ? (
            <Landing
              cards={Object.values(props.node).map((el) => {
                if (el.title) {
                  let _extension = el.title.split(".").pop().toLowerCase();
                  const img =
                    IconIndex[el.url ? _extension : el.title.toLowerCase()];
                  return (
                    <Card
                      onClick={() =>
                        el.url
                          ? el.url.toLowerCase().includes(".link")
                            ? window.open(el.url, "_blank")
                            : openContent(el)
                          : el.children && el.title
                          ? props.setNode(el.children, el.title)
                          : null
                      }
                      activeIndex={index + 1}
                      title={{ title: el.title, isFile: el.url }}
                      img={img ? img : IconIndex._defaultFolder}
                      setHover={(i) => setHover(i)}
                      _outerColor={_outerColor}
                      _innerColor={_innerColor}
                      hover={hover}
                    />
                  );
                }
              })}
            />
          ) : (
            content
          )
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
