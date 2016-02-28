'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const PackSchema = new Schema({
  name: String,
  beers: Array,
  price: Number
});

module.exports = PackSchema;
