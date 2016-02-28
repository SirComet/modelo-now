'use strict';

const Mongoose = require('mongoose');
const BeerSchema = require('../schemas/beer');

const BeerModel = Mongoose.model('beers', BeerSchema);

module.exports = BeerModel;
