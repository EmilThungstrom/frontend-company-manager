import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavbarTop from "./Components/Headers/NavbarTop";
import Departments from "./Containers/Department/Departments";
import EmployeeSearch from "./Containers/Employee/EmployeeSearch";
import DepartmentCreationForm from "./Containers/Department/DepartmentCreationForm";
import EmployeeCreate from "./Containers/Employee/EmployeeCreate";
import { connect } from "react-redux";
import LoginPage from "./Containers/Login/LoginPage";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    if (!this.props.authenticated) {
      return (
        <Router>
          <NavbarTop />
          <LoginPage />
        </Router>
      );
    }

    return (
      <Router>
        <div className="App">
          <NavbarTop authenticated={this.props.authenticated} />
          <Route path="/departments" component={Departments} />
          <Route path="/createDepartment" component={DepartmentCreationForm} />
          <Route path="/employeeSearch" component={EmployeeSearch} />
          <Route path="/employeeCreate" component={EmployeeCreate} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(mapStateToProps)(App);
