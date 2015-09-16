var express = require('express'),
    app = express(),
    port = 3000;

app.use('/public',express.static('public'));
app.use('/bower_components',express.static('bower_components'));

app.get('/test1',function(req,res){
    res.sendFile(__dirname + '/test1.html');
});

app.get('/test2',function(req,res){
    res.sendFile(__dirname + '/test2.html');
});

app.get('/test3',function(req,res){
    res.sendFile(__dirname + '/test3.html');
});

app.listen(3000,function(){
    console.log('server started on port:' + port);
});
