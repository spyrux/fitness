let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Workout Model
let daySchema = require("../models/Day");
  
// CREATE Workout
router.post("/create-day", (req, res, next) => {
  daySchema.create(req.body, (error, data) => {
    if (error) {
      console.log("day not made!");
      return next(error);
      
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
  
// get a day by id 
router.get("/get-date/:id", (req, res) => {
  daySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
  
// UPDATE Workout
router
  .route("/update-day/:id")
  // Get Single day
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
    daySchema.findByIdAndUpdate(
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
          console.log("Day updated successfully !");
        }
      }
    );
  });
  
// Delete Workout
router.delete("/delete-day/:id", 
(req, res, next) => {
  daySchema.findByIdAndRemove(
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