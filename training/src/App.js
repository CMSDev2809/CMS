import React from "react";
import { Header, Router, Navigator } from "./components";
import { Animation, Particles } from "arclight-react";
import "./app.css";

const config = require("./config");

const getDirectory = async () => {
  const directory = await fetch(
    config.production ? config.productionPath : config.path
  ).then(res => res.json());
  return directory;
};

const traverse = (_node, pop) => {
  if (pop) {
    for (let i = 0; i < pop; i++) {
      popUrl();
    }
  }
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

const handleQuery = (str, cb, node, directory) => {
  /* Search Code Goes here
  if (str.length > 0) {
    node = {};
    Object.keys(directory.Programs.children).map(el =>
      el.toLowerCase().includes(str.toLowerCase().replace(/ /g, "_"))
        ? (node[el] = directory.Programs.children[el])
        : null
    );
  } */
  cb(str);
  return _cb => _cb(node, str.length > 0 ? "right" : "left");
};

const App = () => {
  const [locked, setLocked] = React.useState(false);
  const [animation, setAnimation] = React.useState("slideInLeft");
  const [directory, setDirectory] = React.useState(null);
  const [node, setNode] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const handleSetMenu = async (node, direction, url) => {
    setLocked(true);
    if (direction === "right" && url) {
      appendUrl(url);
    }
    setAnimation(direction === "left" ? "slideOutRight" : "slideOutLeft");
    await new Promise((r, j) => setTimeout(() => r(), 500));
    setNode(node);
    setAnimation(direction === "left" ? "slideInLeft" : "slideInRight");
    setLocked(false);
  };
  React.useEffect(() => {
    (async () => {
      let directory = await getDirectory();
      setDirectory(directory);
      setNode(traverse(directory));
    })();
  }, []);
  return (
    <div style={locked ? { pointerEvents: "none" } : {}}>
      <Header
        directory={directory}
        setNode={(node, url) => {
          handleQuery("", setQuery, node)(_node =>
            handleSetMenu(_node, "left", url)
          );
        }}
      />
      <div className={"content"}>
        <Navigator
          reverseNode={num => {
            handleQuery("", setQuery);
            handleSetMenu(traverse(directory, num), "left");
          }}
        />
        <Animation animationName={animation} duration={0.4}>
          {node ? (
            <Router
              node={node}
              setNode={(node, url) => {
                handleQuery("", setQuery, node)(_node =>
                  handleSetMenu(_node, "right", url)
                );
              }}
            />
          ) : null}
        </Animation>
      </div>
    </div>
  );
};

export default App;
