'use strict';

const Mongoose = require('mongoose');
const PackSchema = require('../schemas/pack');

const PackModel = Mongoose.model('packs', PackSchema);

module.exports = PackModel;
