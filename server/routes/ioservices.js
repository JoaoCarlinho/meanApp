const express = require('express');
const router = express.Router();
var IOService = require('../models/ioservice.js');


/* GET ALL IOSERVICES */
router.get('/', function(req, res, next) {
  IOService.find(function (err, post) {
    if (err) return next(err);
    res.json(post);
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
  let newService = new IOService({
    name: req.body.name,
    price: req.body.price,
    schedule: req.body.schedule,
    description: req.body.description,
    maintenance: req.body.maintenance,
    serviceType: req.body.serviceType,
  });
  newService.save((err)=>{
    if(err){
      res.json(err);
    }else{
      res.json({msg: 'Service added successfully'});
    }
  });
  /*
  IOService.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  */
});

/* UPDATE IOService */
router.put('/:id', function(req, res, next) {
  var update = req.body;
  var id = req.params.id;
  console.log('searching '+id+' updating with '+update)
  IOService.findByIdAndUpdate(id, 
    { $set: 
      { name: req.body.name, 
        price: req.body.price, 
        schedule: req.body.schedule, 
        description: req.body.description, 
        maintenance: req.body.maintenance, 
        serviceType: req.body.serviceType
      }
    }, {new: true}, 
    function (err, result) {
    if (err) return next(err);
    res.json(result);
    //console.log(req.body);
  });
});

/* DELETE IOService */
router.delete('/:id', function(req, res, next) {
  IOService.remove({
    _id: req.params.id
  },(err, result)=>{
    if(err){
      res.json(err);
    }else{
      res.json(result);
    }
  });
  /*
  IOService.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  */
});

module.exports = router;