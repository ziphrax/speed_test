var express = require('express'),
    router = express.Router();

router.route('/test1')
    .get(function(req,res){
        res.sendFile(__dirname + '/test1.html');
    });

router.route('/test2')
    .get(function(req,res){
        res.sendFile(__dirname + '/test2.html');
    });

router.route('/test3')
    .get(function(req,res){
        res.sendFile(__dirname + '/test3.html');
    });
    
module.exports = router;
