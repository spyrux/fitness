import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button,  } from "react-bootstrap";
import workoutSchema from "./WorkoutForm"
  
const DayForm = (props) => {

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

  const validationSchema = Yup.object().shape({
    day: Yup.string().required("Required"),
    workouts: Yup.array().of.object().shape(workoutSchema),
  });


  console.log(props);


  

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field name="day" type="text" 
                className="form-control" />
            <ErrorMessage
              name="day"
              className="d-block invalid-feedback"
              component="span"
            />
         
            <Form.Select>
              <option value ="Monday">Monday</option>
              <option value ="Tuesday">Tuesday</option>
              <option value ="Wednesday">Wednesday</option>
              <option value ="Thursday">Thursday</option>
              <option value ="Friday">Friday</option>
              <option value ="Saturday">Saturday</option>
              <option value ="Sunday">Sunday</option>
            </Form.Select>
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