
// CreateStudent Component for add new workout 
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import WorkoutForm from "./WorkoutForm";
  
// CreateWorkout Component
const CreateWorkout = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', sets: '', reps: '' , weight:''})
  // onSubmit handler
  const onSubmit = workoutObject => {
    axios.post(
    'http://localhost:4000/workouts/create-workout', 
    workoutObject)
    
      .then(res => {
        if (res.status === 200)
          alert('workout successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return student form
  return(
    <WorkoutForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Workout
    </WorkoutForm>
  )
}
  
// Export CreateWorkout Component
export default CreateWorkout