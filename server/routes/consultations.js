var nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
var express = require('express');
var router = express.Router();
var Consultation = require('../models/Consultation.js');

const oauth2Client = new OAuth2(
  "291476583769-1ed3fsav3ofuuekefgigg780lpl222t1.apps.googleusercontent.com", // ClientID
  "4ayKwitDg1LyMhi9hBj1d027", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

//set up mailer
oauth2Client.setCredentials({
  refresh_token: "1/wkOFldmUn9L7Wx4YFidTAH6w5kz2SP4UWQBxOMvebhVVksVKcjHl8hDJ-z0ibv-q"
});
  
const accessToken = oauth2Client.refreshAccessToken()
  .then(res => res.credentials.access_token);


let transporter = nodemailer.createTransport({
  service: 'gmail',

  //secure: false,
  //port: 25,
  auth: {
    type: "OAuth2",
    user: "JSkeete@gmail.com", 
    clientId: "291476583769-1ed3fsav3ofuuekefgigg780lpl222t1.apps.googleusercontent.com",
    clientSecret: "4ayKwitDg1LyMhi9hBj1d027",
    refreshToken: "1/wkOFldmUn9L7Wx4YFidTAH6w5kz2SP4UWQBxOMvebhVVksVKcjHl8hDJ-z0ibv-q",
    accessToken: accessToken
},
  /*tls:{
      rejectUnauthorized: false
  }*/
});

/* GET ALL CONSULTATIONSS */
router.get('/', function(req, res, next) {
  Consultation.find(function (err, consultations) {
    if (err) return next(err);
    res.json(consultations);
  });
});

/* GET SINGLE CONSULTATIONS BY ID */
router.get('/:id', function(req, res, next) {
  Consultation.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CONSULTATIONS */
router.post('/', function(req, res, next) {
  console.log('creating request'+req)
  Consultation.create(req.body, function (err, post) {
    if (err){
      return next(err);
    }
    else{
          let emailMessage ='<h1>'+req.body.firstName+',</h1><p> Thank you for reaching out to ISE Optimizations.  Our account specialists will be contacting you withing the next two business days.<br/>';
          emailMessage+='We look forward to moving your business into the future!</p>'
          var mailOptions = {
            from: '"ISE Optimizations" <JSkeete@gmail.com>',
            to: req.body.email/*+',JSkeete@gmail.com**/,
            subject:'Request for Information Received',
            generateTextFromHTML: true,
            html: emailMessage,
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
            transporter.close();
          });
    }
  });
});

/* UPDATE CONSULTATIONS */
router.put('/:id', function(req, res, next) {
  Consultation.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CONSULTATIONS */
router.delete('/:id', function(req, res, next) {
  Consultation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;