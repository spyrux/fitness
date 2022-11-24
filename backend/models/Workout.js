
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let workoutSchema = new Schema({
  name: {
    type: String
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  weight: {
    type: Number
  }
}, {
    collection: 'workouts'
  })
  
module.exports = mongoose.model('Workout', workoutSchema)