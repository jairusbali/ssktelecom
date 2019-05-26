import React from "react";

import AppBar from "./containers/AppBar/AppBar";
import Header from "./components/Header/Header";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { blue, white, orange } from "@material-ui/core/colors/";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#ffffff",
      secondary: "#00000"
    },
    // primary: blue,
    // secondary: orange,
    type: "dark"
  }
});

function App() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <AppBar />
        <Header />
        <Works />
        <Services />
        <Contact />
        <Footer />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
