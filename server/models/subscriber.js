
var mongoose = require('mongoose');

var SubscriberSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String, 
    email: String, 
    phone: String, 
    company: String, 
    industry: String, 
    department: String, 
    position: String, 
    subscribeDate: Number,//{type:Date, default: Date.now},
    
});

module.exports = mongoose.model('Subscriber', SubscriberSchema);