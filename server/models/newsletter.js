
var mongoose = require('mongoose');

var NewsletterSchema = new mongoose.Schema({
    subject: String, 
    text: String, 
    relatedTopics: String, 
    sendDate: {type:Date, default: Date.now},
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);