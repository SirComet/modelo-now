'use strict';

const protocol = 'mongodb';
const host = 'localhost';
const port = 27017;
const database = 'modelo-now';

const getString = function () {
  return `${protocol}://${host}:${port}/${database}`;
};

module.exports = {
  getString
}
