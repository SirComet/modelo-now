'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const PromoSchema = new Schema({
  active: Boolean,
  beers: Object,
  descount: Number
});

module.exports = PromoSchema;
