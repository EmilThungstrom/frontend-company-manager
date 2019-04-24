import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class NavbarTop extends Component {
  render() {
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
      </Navbar>
    );
  }
}

export default NavbarTop;
