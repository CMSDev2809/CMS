import React from "react";
import { Header, Router } from "./components";
import { Animation, Particles } from "arclight-react";
import "./app.css";

const config = require("./config");

const getDirectory = async () => {
  const directory = await fetch(
    config.production ? config.productionPath : config.path
  ).then(res => res.json());
  return directory;
};

const traverse = _node => {
  popUrl();
  let newNode = null;
  const array = window.location.href.split("/");
  const _traverse = (node, array, index = 0) => {
    if (node[array[index]] && index < array.length) {
      _traverse(node[array[index]].children, array, ++index);
    } else {
      newNode = node;
    }
  };
  _traverse(_node, array.splice(3, array.length - 1));
  return newNode;
};

const popUrl = () => {
  let array = window.location.href.split("/");
  array.pop();
  window.history.replaceState(null, null, array.join("/"));
};

const appendUrl = url => {
  window.history.replaceState(
    null,
    null,
    window.location.href +
      (window.location.href.substr(-1) === "/" ? url : `/${url}`)
  );
};

const App = () => {
  const [animation, setAnimation] = React.useState("slideInLeft");
  const [directory, setDirectory] = React.useState(null);
  const [node, setNode] = React.useState(null);
  const handleSetMenu = async (node, direction, url) => {
    if (direction === "right") {
      appendUrl(url);
    }
    setAnimation(direction === "left" ? "slideOutRight" : "slideOutLeft");
    await new Promise((r, j) => setTimeout(() => r(), 350));
    setNode(node);
    await new Promise((r, j) => setTimeout(() => r(), 150));
    setAnimation(direction === "left" ? "slideInLeft" : "slideInRight");
  };
  React.useEffect(() => {
    (async () => {
      let directory = await getDirectory();
      setDirectory(directory);
      setNode(traverse(directory));
    })();
  }, []);
  return (
    <div>
      <Header />
      <div className={"particles2"}>
        <Particles style={"a"} />
      </div>
      <div className={"content"}>
        <button
          onClick={() => {
            handleSetMenu(traverse(directory), "left");
          }}
        >
          <h2
            style={{ marginRight: "35px", marginLeft: "35px", width: "250px" }}
          >
            Back
          </h2>
        </button>
        <Animation animationName={animation} duration={0.5}>
          {node ? (
            <Router
              node={node}
              setNode={(node, url) => handleSetMenu(node, "right", url)}
            />
          ) : null}
        </Animation>
      </div>
    </div>
  );
};

export default App;
