var express = require('express');
var hodor = require('hodor');
var argv = require('yargs').argv;
var app = express();

var port = argv.p || 8080;

// Hodor all the things
app.all('*', function(req, res) {
	res.json({ hodor: hodor() });
});

app.listen(port, function() {
	console.log(hodor() + ' On port ' + port + '.');
});
