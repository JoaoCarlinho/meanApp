var express = require('express');
var router = express.Router();
var Newsletter = require('../models/newsletter.js');

/* GET ALL NEWSLETTERS */
router.get('/', function(req, res, next) {
  Newsletter.find(function (err, newsletters) {
    if (err) return next(err);
    res.json(newsletters);
  });
});

/* GET SINGLE NEWSLETTER BY ID */
router.get('/:id', function(req, res, next) {
  Newsletter.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE NEWSLETTER */
router.post('/', function(req, res, next) {
  Newsletter.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE NEWSLETTER */
router.put('/:id', function(req, res, next) {
  Newsletter.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE NEWSLETTER */
router.delete('/:id', function(req, res, next) {
  Newsletter.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;