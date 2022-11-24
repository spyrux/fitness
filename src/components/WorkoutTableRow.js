
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
  
const WorkoutTableRow = (props) => {
  const { _id, name, sets, reps, weight } = props.obj;
  
  const deleteWorkout = () => {
    axios
      .delete(
    "http://localhost:4000/workouts/delete-workout/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("workout successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  return (
    <tr>
      <td>{name}</td>
      <td>{sets}</td>
      <td>{reps}</td>
      <td>{weight}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-workout/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteWorkout} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default WorkoutTableRow;