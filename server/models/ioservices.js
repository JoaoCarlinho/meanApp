
var mongoose = require('mongoose');

var IOServiceSchema = new mongoose.Schema({
    name: String, 
    price: String, 
    schedule: Object, 
    description: String,
    maintenance: String,
    serviceType: String,
});

module.exports = mongoose.model('IOService', IOServiceSchema);