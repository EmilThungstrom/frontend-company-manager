import React from "react";
import Card from "react-bootstrap/Card";
import "./Department.css";
import DepartmentEmployees from "./DepartmentEmployees";
import DepartmentTeams from "./DepartmentTeams";

const Department = props => {
  let firstName;
  let lastName;

  if (props.department.head != null) {
    firstName = props.department.head.firstName;
    lastName = props.department.head.lastName;
  } else {
    firstName = "";
    lastName = "";
  }

  return (
    <Card>
      <div className="d-flex flex-row row-hl m-5">
        <div className="DepartmentName item-hl">
          <h3 className="mb-2">
            <u>{props.department.name}</u>
          </h3>
          <h6 className="text-muted">
            <b>
              Head: {firstName} {lastName}
            </b>
          </h6>
        </div>
        <div className="Collaps">
          <DepartmentEmployees employees={props.department.employees} />
          <div className="mt-4">
            <DepartmentTeams teams={props.department.teams} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Department;
