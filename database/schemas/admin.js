'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const AdminSchema = new Schema({
  name: String,
  password: String
});

module.exports = AdminSchema;
