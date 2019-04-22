import React, { useState } from "react";
import { Button, Collapse, Table } from "react-bootstrap";

const DepartmentTeams = props => {
  const [openState, setOpenState] = useState({
    open: false
  });

  const toggleOpenState = () => {
    setOpenState({
      open: !openState.open
    });
  };

  const teams = props.teams.map(team => {
    return (
      <tr key={team.id}>
        <td>{team.id}</td>
        <td>{team.leader.firstName + " " + team.leader.lastName}</td>
        <td>{team.members.length}</td>
      </tr>
    );
  });

  return (
    <div>
      <Button onClick={toggleOpenState} aria-controls="example-collapse-text" aria-expanded={openState.open}>
        Teams: {props.teams.length}
      </Button>
      <Collapse in={openState.open}>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Team</th>
                <th>Leader</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>{teams}</tbody>
          </Table>
        </div>
      </Collapse>
    </div>
  );
};

export default DepartmentTeams;
