import React from "react";
import { Form } from "react-bootstrap";

const SelectForm = props => {
  const options = [];

  if (props.options != null) {
    props.options.forEach(option => {
      options.push(
        <option key={option} value={option}>
          {option}
        </option>
      );
    });
  }

  return (
    <React.Fragment>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control className={props.className} as="select" onChange={props.onChange}>
        {options}
      </Form.Control>
    </React.Fragment>
  );
};

export default SelectForm;
