let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Workout Model
let workoutSchema = require("../models/Workout");
  
// CREATE Workout
router.post("/create-workout", (req, res, next) => {
  workoutSchema.create(req.body, (error, data) => {
    if (error) {
      console.log("Workout not made!");
      return next(error);
      
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
  
// READ Workouts
router.get("/", (req, res) => {
  workoutSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
  
// UPDATE Workout
router
  .route("/update-workout/:id")
  // Get Single Workout
  .get((req, res) => {
    workoutSchema.findById(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })
  
  // Update Workout Data
  .put((req, res, next) => {
    workoutSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Workout updated successfully !");
        }
      }
    );
  });
  
// Delete Workout
router.delete("/delete-workout/:id", 
(req, res, next) => {
  workoutSchema.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
  
module.exports = router;