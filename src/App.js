import React from "react";
import logo from "./logo.svg";
import "./App.css";

import AppBar from "./AppBar/AppBar";
import Header from "./components/Header/Header";

function App() {
  return (
    <React.Fragment>
      <AppBar />
      <Header />
    </React.Fragment>
  );
}

export default App;
