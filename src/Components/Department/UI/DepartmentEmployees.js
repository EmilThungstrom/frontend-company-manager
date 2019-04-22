import React, { useState } from "react";
import { Button, Collapse, Table } from "react-bootstrap";

const DepartmentEmployees = props => {
  const [openState, setOpenState] = useState({
    open: false
  });

  const toggleOpenState = () => {
    setOpenState({
      open: !openState.open
    });
  };

  const employees = props.employees.map(employee => {
    var teamId;
    if (employee.team != null) {
      teamId = employee.team.id;
    } else {
      teamId = "";
    }

    return (
      <tr key={employee.id}>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.address}</td>
        <td>{employee.email}</td>
        <td>{teamId}</td>
      </tr>
    );
  });
  return (
    <div>
      <Button onClick={toggleOpenState} aria-controls="example-collapse-text" aria-expanded={openState.open}>
        Employees: {props.employees.length}
      </Button>
      <Collapse in={openState.open}>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>{employees}</tbody>
          </Table>
        </div>
      </Collapse>
    </div>
  );
};

export default DepartmentEmployees;
