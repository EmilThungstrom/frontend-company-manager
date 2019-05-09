import React, { Component } from "react";
import { Button, Alert } from "react-bootstrap";
import InputForm from "../../Components/Forms/InputForm";
import axios from "axios";

export class DepartmentCreationForm extends Component {
  state = {
    creationForm: {
      name: "",
      head: null
    },
    success: false
  };

  formHandler = event => {
    const updatedCreationForm = {
      ...this.state.creationForm
    };

    updatedCreationForm.name = event.target.value;

    this.setState({ creationForm: updatedCreationForm });
  };

  dismissHandler = () => {
    this.setState({ success: false });
  };

  postDataHandler = () => {
    if (this.state.creationForm.name.length === 0) {
      return;
    }
    axios
      .post("http://localhost:8080/api/department/create", this.state, { withCredentials: true })
      .then(res => {
        this.setState({ success: true });
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="m-5">
        <InputForm label="Department name" className="form-control w-25" type="text" onChange={this.formHandler} />
        <Button className="btn btn-primary mt-2" onClick={this.postDataHandler}>
          Create
        </Button>
        {this.state.success ? (
          <Alert variant="success mt-2" onClose={this.dismissHandler} dismissible>
            Department created successfully
          </Alert>
        ) : null}
      </div>
    );
  }
}

export default DepartmentCreationForm;
