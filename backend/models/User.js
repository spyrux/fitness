var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');

var UserSchema = new mongoose.Schema({

    username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},

    email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
     bio: String,
     image: String,
     hash: String,
     salt: String
}, {timestamps: true});

UserSchema.methods.setPassword = function(password){
    
}

mongoose.model('User', UserSchema);