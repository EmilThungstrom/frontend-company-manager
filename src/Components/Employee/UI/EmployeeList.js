import React from "react";
import { Table } from "react-bootstrap";

const EmployeeList = props => {
  const employees = props.employees.map(employee => {
    let teamId;
    if (employee.team != null) {
      teamId = employee.team.id;
    } else {
      teamId = "";
    }
    let department;
    if (employee.department != null) {
      department = employee.department.name;
    } else {
      department = "";
    }

    return (
      <tr key={employee.id}>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.address}</td>
        <td>{employee.email}</td>
        <td>{department}</td>
        <td>{teamId}</td>
      </tr>
    );
  });

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Department</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>{employees}</tbody>
      </Table>
    </div>
  );
};

export default EmployeeList;
