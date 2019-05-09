import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

const NavbarTop = props => {
  let logoutHandler = () => {
    axios
      .post("http://localhost:8080/logout")
      .then(res => {
        if (res.status === 200) {
          props.onLogoutSuccess();
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand className="mx-5">Company Manager</Navbar.Brand>
      <Nav className="mr-auto">
        <NavDropdown title="Department" id="basic-nav-dropdown">
          <LinkContainer to="/departments">
            <NavDropdown.Item>List</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/createDepartment">
            <NavDropdown.Item>Create</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown title="Employee" id="basic-nav-dropdown">
          <LinkContainer to="/employeeSearch">
            <NavDropdown.Item>Search</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/employeeCreate">
            <NavDropdown.Item>Create</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/team">
          <Nav.Link>Team</Nav.Link>
        </LinkContainer>
      </Nav>
      {props.authenticated && (
        <Nav className="mr-5">
          <Navbar.Text>Signed in as: somebody</Navbar.Text>
          <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutSuccess: () => dispatch({ type: "SET_AUTH_FALSE" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavbarTop);
