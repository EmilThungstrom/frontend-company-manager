import React from "react";
import { Form } from "react-bootstrap";

const SelectForm = props => {
  const options = [];

  for (let value in props.options) {
    options.push(<option key={value}>{value}</option>);
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
