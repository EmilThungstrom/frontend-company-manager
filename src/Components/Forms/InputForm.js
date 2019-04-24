import React from "react";
import { Form } from "react-bootstrap";

const InputForm = props => {
  let inputElement = <Form.Control {...props} />;

  return (
    <React.Fragment>
      <Form.Label>{props.label}</Form.Label>
      {inputElement}
    </React.Fragment>
  );
};

export default InputForm;
