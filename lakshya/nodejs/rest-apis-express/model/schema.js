var mongoose = require('mongoose');
var user = require()
var Schema = mongoose.Schema;

var user = new Schema({
    Name: String,
    Age: String,
    Add: [{ State: String, Zip: Date }]
});

module.exports = mongoose.model('user', user);