import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Experience">
            <Experience />
          </Route>
          <Route path="/404Error">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
