'use strict';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var path = require('path');
// var webpack = require('webpack');
// var config = require('../webpack.config.js')
// const compiler = webpack(config);

//
var app = express();

// 
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// 
// app.use(require('webpack-hot-middleware')(compiler));
require('./routes')(app);

var server = app.listen(9000, function(){
 	var port = server.address().port;
 	console.log('\nExpress server listening on port ' + port + ', in ' + process.env.NODE_ENV + ' mode')
})

server.on('error', function(e){
    console.log(e);
	if(e.code === 'EADDRINUSE') {
		console.log('ADDRESS IN USE');
		console.log('\nExpress server listening on port ' + e.port + ', in ' + process.env.NODE_ENV + 'mode')
	} else {
		process.exit(1);
	}
})

module.exports = server;