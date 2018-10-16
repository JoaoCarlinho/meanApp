
var mongoose = require('mongoose');

var ConsultSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String, 
    email: String, 
    phone: String,
    serviceType: String, 
    company: String, 
    industry: String,
    region: String, 
    department: String, 
    position: String,
    clientAccounts: Number,
    employees: Number,
    requestDate: String,
    consultDate: String,
    closedStatus: Number,

    
});

module.exports = mongoose.model('Consultation', ConsultSchema);