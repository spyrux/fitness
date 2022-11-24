import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import WorkoutTableRow from "./WorkoutTableRow";
  
const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/workouts/")
      .then(({ data }) => {
        setWorkouts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return workouts.map((res, i) => {
      return <WorkoutTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default WorkoutList;