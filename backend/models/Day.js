
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let workoutSchema = require("./Workout");
  
let daySchema = new Schema({
    day:{
      type: String,
      enum : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    },
    workouts: [{ type: mongoose.Schema.Types.ObjectId, ref:'Workout' }],
  });


module.exports = mongoose.model('Day', daySchema)