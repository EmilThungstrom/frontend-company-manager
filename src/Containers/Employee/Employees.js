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
    employees: []
  };

  formHandler = (event, inputIdentifier) => {
    const updatedFormState = {
      ...this.state.formState
    };

    switch (inputIdentifier) {
      case 0:
        updatedFormState.firstName = event.target.value;
        break;
      case 1:
        updatedFormState.lastName = event.target.value;
        break;
      case 2:
        updatedFormState.address = event.target.value;
        break;
      case 3:
        updatedFormState.email = event.target.value;
        break;
      case 4:
        updatedFormState.teamId = event.target.value;
        break;
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
          <InputForm label="First name" className="form-control w-25" type="text" onChange={event => this.formHandler(event, 0)} />
          <InputForm label="Last name" className="form-control w-25" type="text" onChange={event => this.formHandler(event, 1)} />
          <InputForm label="Address" className="form-control w-25" type="text" onChange={event => this.formHandler(event, 2)} />
          <InputForm label="Email" className="form-control w-25" type="text" onChange={event => this.formHandler(event, 3)} />
          <InputForm label="Team" className="form-control w-25" type="number" onChange={event => this.formHandler(event, 4)} />
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
