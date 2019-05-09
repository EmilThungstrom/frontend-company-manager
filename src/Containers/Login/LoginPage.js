import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

export class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  authDataHandler = () => {
    const params = new URLSearchParams();
    params.append("username", "user");
    params.append("password", "userPass");

    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:8080/login", params, { withCredentials: true })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  getDataHandler = () => {
    axios
      .get("http://localhost:8080/api/department", { withCredentials: true })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <Form className="w-25 m-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={event => this.setState({ email: event.target.value })} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={event => this.setState({ password: event.target.value })} />
        </Form.Group>
        <Button variant="primary" onClick={this.authDataHandler}>
          Submit
        </Button>
        <Button variant="primary" onClick={this.getDataHandler}>
          get
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCookieReturn: () => dispatch({ type: "SET_COOKIE", value: "test" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
