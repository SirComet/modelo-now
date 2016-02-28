'use strict';

const Mongoose = require('mongoose');
const PromoSchema = require('../schemas/promo');

const PromoModel = Mongoose.model('promos', PromoSchema);

module.exports = PromoModel;
