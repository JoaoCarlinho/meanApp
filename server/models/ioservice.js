
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

var IOServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: String,
        required: true
    }, 
    schedule: {
        type: Object,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    maintenance: {
        type: String,
        required: true
    },
    serviceType: {
        type: String,
        required: true
    },
}, { collection: 'ioservices' });

module.exports = mongoose.model('IOService', IOServiceSchema);