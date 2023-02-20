import "./App.css";
import React from "react";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeSrceen from "./screens/HomeSrceen";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <Switch>
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/policy" component={Policy} exact />
          <Route path="/" component={HomeSrceen} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
