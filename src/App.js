import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarTop from "./Components/Headers/NavbarTop";
import Departments from "./Containers/Department/Departments";
import EmployeeSearch from "./Containers/Employee/EmployeeSearch";
import DepartmentCreationForm from "./Containers/Department/DepartmentCreationForm";
import EmployeeCreate from "./Containers/Employee/EmployeeCreate";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarTop />
          <Route path="/departments" component={Departments} />
          <Route path="/createDepartment" component={DepartmentCreationForm} />
          <Route path="/employeeSearch" component={EmployeeSearch} />
          <Route path="/employeeCreate" component={EmployeeCreate} />
        </div>
      </Router>
    );
  }
}

export default App;
