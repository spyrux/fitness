
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let daySchema = require("./Day");
  
let weekSchema = new Schema({

    name: {type: String, index: true},

    days: [{ type: mongoose.Schema.Types.ObjectId, ref:'Day' }],

    
  });


module.exports = mongoose.model('Week', weekSchema)