import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Routes, Switch,
    Route, Link } from "react-router-dom";
  
// Import other React Component
import CreateWorkout from 
    "./components/create-workout.components";
import EditWorkout from 
    "./components/update-workout.components";
import WorkoutList from 
    "./components/workout-list.components";
  
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-workout"} 
                  className="nav-link">
                  Williams Workout App Phase 1
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-workout"} 
                    className="nav-link">
                    Create Workout
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/workout-list"} 
                    className="nav-link">
                    Workout List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
        
                <Routes>
                  <Route exact path="/" 
                    element ={<CreateWorkout/>} />
                  <Route path="/create-Workout" 
                     element ={<CreateWorkout/>} />
                  <Route path="/edit-workout/:id" 
                     element ={<EditWorkout/>}/>
                  <Route path="/workout-list" 
                     element ={<WorkoutList/>} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </Router>
  );
};

export default App;