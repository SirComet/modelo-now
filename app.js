'use strict';

const Express = require('express');
<<<<<<< HEAD
const Path = require('path');

const app = Express();

const publicPath = Path.join(__dirname, 'app/public');

app.set('etag', 'strong');
app.use(Express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(publicPath + 'app/index.html');
});

app.get('/api/beers', (req, res) => {
  let beers = [
    { name: 'Cerveza generica', id: 'asdf' },
    { name: 'Cerveza no generica', id: 'asdg' },
    { name: 'Cerveza super generica', id: 'asde' }
  ];

  res.json(JSON.stringify(beers));
});

app.listen(3000, '127.0.0.1', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server running on port 3000.')
});

module.exports = app;
=======

const app = Express();

app.set('etag', 'strong');

app.get('/', (req, res) => {
	res.send('Hello world.');
});

app.listen(3000, () => console.log('Server running on port 3000.'));

>>>>>>> b276a9b892dcb4f23072c142c8d6abef336c122d
