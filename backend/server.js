require("dotenv").config({ path: "./config.env" });
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

const Db = process.env.ATLAS_URI;




mongoose.Promise = global.Promise;
mongoose.connect(Db).then(() => {
  console.log('Database successfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

// Express Route
const workoutRoute = require('../backend/routes/workout.route')
const dayRoute = require('../backend/routes/day.route')


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/workouts', workoutRoute)
app.use('/days', dayRoute)
  
  
// PORT
// Connecting MongoDB Database
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})




// 404 Error
app.use((req, res, next) => {
  res.status(404).send('Error 404!')
});
  
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});