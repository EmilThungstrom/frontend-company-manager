import React from "react";

const EmployeeForm = props => {
  let inputElement = <input {...props} />;

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default EmployeeForm;
