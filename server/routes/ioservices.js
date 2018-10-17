const express = require('express');
const router = express.Router();
var IOService = require('../models/ioservices.js');
var list = require('./IOServiceList.js');


/* GET ALL IOSERVICES */
router.get('/', function(req, res, next) {
  IOService.find(function (err, ioservices) {
    if (err) return next(err);
    res.json(list);
  });
});

/* GET SINGLE IOService BY ID */
router.get('/:id', function(req, res, next) {
  IOService.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE IOService */
router.post('/', function(req, res, next) {
  IOService.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE IOService */
router.put('/:id', function(req, res, next) {
  IOService.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE IOService */
router.delete('/:id', function(req, res, next) {
  IOService.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;