const express = require('express');
const router = express.Router();


router.get('*', (req, res) => {
    if(req.body == "test"){
        res.json(true);
    }else{
        res.json(false);
    }
});

/**
 * /* GET ALL IOSERVICES *
router.get('/', function(req, res, next) {
    IOService.find(function (err, IOService) {
      if (err) return next(err);
      res.json(IOService);
    });
  });
  
  /* GET SINGLE IOService BY ID *
  router.get('/:id', function(req, res, next) {
    IOService.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* SAVE IOService *
  router.post('/', function(req, res, next) {
    IOService.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* UPDATE IOService *
  router.put('/:id', function(req, res, next) {
    IOService.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE IOService *
  router.delete('/:id', function(req, res, next) {
    IOService.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
 */

module.exports = router;