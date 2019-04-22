import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarTop from "./Components/Headers/NavbarTop";
import Departments from "./Containers/Department/Departments";
import Employees from "./Containers/Employee/Employees";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarTop />
          <Route path="/department" component={Departments} />
          <Route path="/employee" component={Employees} />
        </div>
      </Router>
    );
  }
}

export default App;
