'use strict';

const Mongoose = require('mongoose');
const AdminSchema = require('../schemas/admin');

const AdminModel = new Mongoose.model('admin', AdminSchema);

module.exports = AdminModel;
