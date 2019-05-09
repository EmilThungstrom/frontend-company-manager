import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Col } from "react-bootstrap";
import EmployeeList from "../../Components/Employee/UI/EmployeeList";
import InputForm from "../../Components/Forms/InputForm";
import SelectForm from "../../Components/Forms/SelectForm";

class EmployeeSearch extends Component {
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
    employees: [],
    departments: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/department/list", { withCredentials: true })
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
  }

  formHandler = (event, inputIdentifier) => {
    const updatedFormState = {
      ...this.state.formState
    };
    if (inputIdentifier === "department") {
      updatedFormState["departmentId"] = this.state.departments[event.target.value];
    } else {
      updatedFormState[inputIdentifier] = event.target.value;
    }
    this.setState({ formState: updatedFormState });
  };

  searchHandler() {
    axios
      .post("http://localhost:8080/api/employee", this.state.formState)
      .then(res => {
        if (res.status === 200) {
          this.setState({ employees: res.data });
        }
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
              <Form.Group controlId="formTeam">
                <InputForm label="Team" type="number" onChange={event => this.formHandler(event, "teamId")} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formDepartment">
                <SelectForm label="Department" options={Object.keys(this.state.departments)} onChange={event => this.formHandler(event, "department")} />
              </Form.Group>
            </Col>
          </Form.Row>
          <Button
            className="mt-2"
            onClick={() => {
              this.searchHandler();
            }}
          >
            Search
          </Button>
        </div>
        <div>
          <EmployeeList employees={this.state.employees} />
        </div>
      </div>
    );
  }
}

export default EmployeeSearch;
