//const { mongoose }= require("../db/mongoose");
var mongoose = require('mongoose');
//const Schema = mongoose.Schema;

// var SomeModelSchema = new Schema({
//   name : String,
//   id : Number,
//   country : String
// });

const SomeModel = new mongoose.Schema({
    name : String,
    age : Number,
    add : {
        id : Number,
        state : String,
        zip : Number
    }
})

module.exports = mongoose.model('someModel',SomeModel)


