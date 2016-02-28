'use strict';

const Express = require('express');
const Path = require('path');

const app = Express();

const publicPath = Path.join(__dirname, 'app/public');

app.set('etag', 'strong');
app.use(Express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(publicPath + 'app/index.html');
});

app.listen(3000, '127.0.0.1', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server running on port 3000.')
});

module.exports = app;
