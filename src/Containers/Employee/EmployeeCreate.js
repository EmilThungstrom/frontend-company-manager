import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Col } from "react-bootstrap";
import InputForm from "../../Components/Forms/InputForm";
import SelectForm from "../../Components/Forms/SelectForm";

class EmployeeCreate extends Component {
  state = {
    formState: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",

      employeeId: null,
      departmentId: null,
      teamId: null
    },
    departments: [],
    departmentTeams: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/department/list")
      .then(res => {
        let departments = {
          None: null,
          ...res.data
        };
        this.setState({ departments: departments });
      })
      .catch(err => {
        console.error(err);
      });

    axios
      .get("http://localhost:8080/api/department/teams")
      .then(res => {
        let departmentTeams = res.data;
        departmentTeams.None = null;
        this.setState({ departmentTeams: departmentTeams });
        console.log(this.state.departmentTeams);
      })
      .catch(err => {
        console.error(err);
      });
  }

  formHandler = (event, inputIdentifier) => {
    const updatedFormState = {
      ...this.state.formState
    };
    if (inputIdentifier === "department") {
      updatedFormState.departmentId = this.state.departments[event.target.value];
      if (updatedFormState.departmentId != null) {
        updatedFormState.teamId = this.state.departmentTeams[updatedFormState.departmentId][0];
      }
    } else {
      updatedFormState[inputIdentifier] = event.target.value;
    }
    this.setState({ formState: updatedFormState });
  };

  createPostHandler() {
    axios
      .post("http://localhost:8080/api/employee/create", this.state.formState, { withCredentials: true })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <div className="m-5">
          <Form.Row>
            <Col>
              <Form.Group controlId="formFirstName">
                <InputForm label="First name" type="text" onChange={event => this.formHandler(event, "firstName")} />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <InputForm label="Last name" type="text" onChange={event => this.formHandler(event, "lastName")} />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <InputForm label="Address" type="text" onChange={event => this.formHandler(event, "address")} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <InputForm label="Email" type="text" onChange={event => this.formHandler(event, "email")} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formDepartment">
                <SelectForm label="Department" options={Object.keys(this.state.departments)} onChange={event => this.formHandler(event, "department")} />
              </Form.Group>
              <Form.Group controlId="formDepartmentTeams">
                <SelectForm label="Team" options={this.state.departmentTeams[this.state.formState.departmentId]} onChange={event => this.formHandler(event, "teamId")} />
              </Form.Group>
            </Col>
          </Form.Row>
          <Button
            className="mt-2"
            onClick={() => {
              this.createPostHandler();
            }}
          >
            Create
          </Button>
        </div>
      </div>
    );
  }
}

export default EmployeeCreate;
