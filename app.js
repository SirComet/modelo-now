'use strict';

/*!
 * Moodules and dependencies
 */

const Path = require('path');
const Express = require('express');
const Logger = require('morgan');
const BodyParser = require('body-parser');
const Compression = require('compression');

/*!
 * Routes
 */

const Api = require('./routes/api');
const Admin = require('./routes/admin');

/*!
 * Local vars
 */

const publicPath = Path.join(__dirname, 'app/public');

const app = Express();

/*!
 * Server configuration
 */

app.set('etag', 'strong');
app.use(Logger('tiny'));
app.use(Compression());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

app.use(Express.static(publicPath));

/*!
 * Basic Routing
 */

app.get('/', (req, res) => {
  res.sendFile(publicPath + '/test.html');
});

app.get('/admin', (req, res) => {
  res.redirect('/admin/dashboard');
});

app.get('/admin/dashboard', (req, res) => {
  res.sendFile(publicPath + '/dashboard.html');
});

app.get('/caja', (req, res) => {
  res.sendFile(publicPath + '/caja.html')
});

app.get('/design-package', (req, res) => {
  res.sendFile(publicPath + '/design-package.html');
});

app.get('/profile', (req, res) => {
  res.sendFile(publicPath + '/profile.html');
});

app.use('/api/', Api);

/*!
 * Starting server
 */

app.listen(3000, '127.0.0.1', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server running on port 3000.');
});

module.exports = app;
