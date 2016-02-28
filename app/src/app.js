'use strict';

const Fetch = require('node-fetch');
const React = require('react');
const ReactDOM = require('react-dom');
const BeerList = require('./components/beer-list');

Fetch('http://localhost:3000/api/beers/').
  then(res => {
    return res.json();
  }).
  then(data => {
    let beers = JSON.parse(data);
    ReactDOM.render(
      <BeerList beers={beers} />,
      document.querySelector('#beer-list')
    );
  })
