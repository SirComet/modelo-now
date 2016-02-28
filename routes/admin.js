'use strict';

const Passport = require('passport');
const Mongoose = require('mongoose');
const Express = require('express');

const Router = Express.Router();

Router
  .post('/login', (req, res) => {
    res.json(req.body);
  });

module.exports = Router;
