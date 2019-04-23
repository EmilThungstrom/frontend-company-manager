import React from "react";

const InputForm = props => {
  let inputElement = <input {...props} />;

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default InputForm;
