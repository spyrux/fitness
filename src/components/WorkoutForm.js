import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
  
const WorkoutForm= (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    sets: Yup.number()
      .positive("Invalid set number")
      .integer("Invalid set number")
      .required("Required"),
    reps: Yup.number()
      .positive("Invalid reps number")
      .integer("Invalid reps number")
      .required("Required"),
    weight: Yup.number()
      .positive("Invalid weight number")
      .integer("Invalid weight number")
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field name="name" type="text" 
                className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="sets" type="number" 
                className="form-control" />
            <ErrorMessage
              name="sets"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="reps" type="number" 
                className="form-control" />
            <ErrorMessage
              name="reps"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="weight" type="number" 
                className="form-control" />
            <ErrorMessage
              name="weight"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default WorkoutForm;