import React from "react";
import ReactDOM from "react-dom";

import Search from "./Search";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
