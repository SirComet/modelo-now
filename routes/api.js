'use strict';

const Mongoose = require('mongoose');
const Express = require('express');
const Router = Express.Router();

const BeerModel = require('../database/').beer;
const PromoModel = require('../database/').promo;
const DBConfig = require('../database/config');

Mongoose.connect(DBConfig.getString());

Router
  .get('/beers', (req, res) => {
    BeerModel
      .find({})
      .then(docs => res.json(docs))
      .catch(err => res.json(err));
  })
  .get('/promos', (req, res) => {
    PromoModel
      .find({})
      .then(docs => res.json(docs))
      .catch(err => res.json(err));
  });

module.exports = Router;
