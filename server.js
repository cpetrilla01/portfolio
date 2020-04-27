const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const sslRedirect = require('heroku-ssl-redirect');

const app = express();

const hbs = exphbs.create({
	extname: '.hbs',
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'dist', 'templates', 'layouts'),
	partialsDir: path.join(__dirname, 'dist', 'templates', 'partials')
});

app.use(sslRedirect());

app.set('port', (process.env.PORT || 80));
app.use(express.compress());

app.set('views', path.join(__dirname, 'dist', 'templates', 'views'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
	res.render('index', {
		pageTitle: 'Christopher Petrilla, Front-end engineer',
		metaDescription: 'Portfolio for Christopher Petrilla, a Philadelphia-based front-end engineer. Expertise with Node, Express, React, and performance.',
		copyrightYear: new Date().getFullYear()
	});
});

app.use('/', express.static('dist/static-root'));
app.use('/css', express.static('dist/css'));
app.use('/img', express.static('dist/img'));

app.use(function(req, res) {
	res.status(404).render('404', {
		pageTitle: 'Christopher Petrilla, Front-end engineer',
		copyrightYear: new Date().getFullYear()
	});
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port ', app.get('port'));
});