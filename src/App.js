import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarTop from "./Component/Headers/NavbarTop";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarTop />
        </div>
      </Router>
    );
  }
}

export default App;
