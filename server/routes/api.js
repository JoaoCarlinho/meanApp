const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var IOService = require('../models/ioservice.js');

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

/* GET ALL IOSERVICES */
router.get('/', function(req, res, next) {
  IOService.find(function (err, ioservices) {
    if (err) return next(err);
    res.json(ioservices);
  });
});

/*

// Get services
router.get('/', (req, res) => {
  // Connect
  MongoClient.connect('mongodb://localhost', function (err, client) {
      if (err) throw err;
  
      var db = client.db('IO');

      db.collection('serviceList').find()
          .toArray()
          .then((serviceList) => {
              response.data = serviceList;
              res.json(response);
          })
          .catch((err) => {
              sendError(err, res);
          });
  }); 
});

*/

/**
 *  // GET api listing.
 router.get('/', (req, res) => {
  res.send('api works');
});
 * 
 */

module.exports = router;