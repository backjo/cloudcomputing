var x = require('express');
var app = x();

app.get('/', function(req,res) {
        res.send('hello paul!');
});

app.listen(8888, function(){});