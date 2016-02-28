'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const BeerSchema = new Schema({
  name: String,
  img: String,
  price: Number,
  amount: Number,
  description: String
});

module.exports = BeerSchema;
