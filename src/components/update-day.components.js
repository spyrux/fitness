
// EditStudent Component for update student data
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import DayForm from "./DayForm";
  
// EditStudent Component
const EditDay = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    reps: "",
    weight:""
  });
    
  //onSubmit handler
  const onSubmit = (dayObject) => {
    axios
      .put(
        "http://localhost:4000/workouts/update-workout/" +
          props.match.params.id,
        dayObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Workout successfully updated");
          props.history.push("/workout-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize workout form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/days/" 
        + props.match.params.id
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
export default EditDay;