var express = require('express');
var router = express.Router();

router.get('/api1', function(req, res){
    res.send({greeting:'Server API 1'});
});

router.get('/api2', function(req, res){
    res.send({greeting:'Server API 2'});
});
module.exports = router;