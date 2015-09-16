var express = require('express'),
    app = express()
    routes = require('./routes/router'),
    port = 3000;

app.use('/',routes);
app.use('/public',express.static('public'));
app.use('/bower_components',express.static('bower_components'));

app.listen(3000,function(){
    console.log('server started on port:' + port);
});
