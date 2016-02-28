'use strict';

const Fetch = require('node-fetch');
const React = require('react');
const ReactDOM = require('react-dom');
const BeerList = require('./components/beer-list');

ReactDOM.render(
  <BeerList />,
  document.querySelector('#beer-list')
);
