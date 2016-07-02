#!/bin/env node

const path = require('path');
var express = require('express');
var exphbs  = require('express-handlebars');

var SampleApp = function() {
	var self = this;

	self.setupVariables = function() {
		// Set the environment variables we need.
		self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
		self.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

		if (typeof self.ipaddress === "undefined") {
			// Log errors on OpenShift but continue w/ 127.0.0.1 - this allows us to run/test the app locally.
			console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
			self.ipaddress = "127.0.0.1";
		}
	};

	self.terminator = function(sig){
		if (typeof sig === "string") {
			console.log('%s: Received %s - terminating sample app ...', Date(Date.now()), sig);
			process.exit(1);
		}

		console.log('%s: Node server stopped.', Date(Date.now()));
	};

	self.setupTerminationHandlers = function(){
		// Process on exit and signals.
		process.on('exit', function() {
			self.terminator();
		});

		var signals = ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'];

		signals.forEach(function(element, index, array) {
			process.on(element, function() {
				self.terminator(element);
			});
		});
	};

	self.initializeServer = function() {
		var hbs = exphbs.create({
			extname: '.hbs',
			defaultLayout: 'main',
			layoutsDir: path.join(__dirname + '/dist', 'templates', 'layouts')
		});

		self.app = express();
		self.app.use(express.compress());

		self.app.set('views', path.join(__dirname, 'dist', 'templates', 'partials'));
		self.app.engine('.hbs', hbs.engine);
		self.app.set('view engine', '.hbs');

		self.app.get('/', function (req, res) {
			res.render('index');
		});

		self.app.use('/css', express.static('dist/css'));
		self.app.use('/img', express.static('dist/img'));
	};

	self.initialize = function() {
		self.setupVariables();
		self.setupTerminationHandlers();
		self.initializeServer();
	};

	self.start = function() {
		// Start the app on the specific interface (and port).
		self.app.listen(self.port, self.ipaddress, function() {
			console.log('%s: Node server started on %s:%d ...', Date(Date.now() ), self.ipaddress, self.port);
		});
	};
};

var zapp = new SampleApp();
zapp.initialize();
zapp.start();

