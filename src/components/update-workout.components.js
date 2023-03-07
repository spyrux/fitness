
// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import WorkoutForm from "./WorkoutForm";
import { useParams, useNavigate } from "react-router-dom";
  
// EditStudent Component
const EditWorkout = () => {

  
  let { id } = useParams();  
  const history = useNavigate();
  
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    reps: "",
    weight:""
  });


  //onSubmit handler
  const onSubmit = (workoutObject) => {
    axios
      .put(
        "http://localhost:4000/workouts/update-workout/" +
          id,
        workoutObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Workout successfully updated");
          history("/workout-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize workout form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/workouts/update-workout/" 
        + id
      )
      .then((res) => {
        const { name, sets, reps, weight } = res.data;
        setFormValues({ name, sets, reps, weight });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return student form
  return (
    <WorkoutForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Workout
    </WorkoutForm>
  );
};
  
// Export EditStudent Component
export default EditWorkout;