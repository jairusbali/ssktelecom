import React from "react";
import { createGlobalStyle } from "styled-components";

import AppBar from "./AppBar/AppBar";
import Header from "./components/Header/Header";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <AppBar />
      <Header />
      <Works />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
