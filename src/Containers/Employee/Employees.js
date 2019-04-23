import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import EmployeeList from "../../Components/Employee/UI/EmployeeList";
import InputForm from "../../Components/Forms/InputForm";

class Employees extends Component {
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
      .get("http://localhost:8080/api/department/list")
      .then(res => {
        console.log(res.data);
        this.setState({ departments: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  formHandler = (event, inputIdentifier) => {
    const updatedFormState = {
      ...this.state.formState
    };
    updatedFormState[inputIdentifier] = event.target.value;
    this.setState({ formState: updatedFormState });
  };

  searchHandler() {
    axios
      .post("http://localhost:8080/api/employee", this.state.formState)
      .then(res => {
        if (res.status === 200) {
          this.setState({ employees: res.data });
        }
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
          <InputForm label="First name" className="form-control w-25" type="text" onChange={event => this.formHandler(event, "firstName")} />
          <InputForm label="Last name" className="form-control w-25" type="text" onChange={event => this.formHandler(event, "lastName")} />
          <InputForm label="Address" className="form-control w-25" type="text" onChange={event => this.formHandler(event, "address")} />
          <InputForm label="Email" className="form-control w-25" type="text" onChange={event => this.formHandler(event, "email")} />
          <InputForm label="Team" className="form-control w-25" type="number" onChange={event => this.formHandler(event, "teamId")} />
          <Button
            className="btn btn-primary mt-2"
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

export default Employees;
