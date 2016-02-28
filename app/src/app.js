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
    ReactDOM.render(
      <BeerList beers={data} />,
      document.querySelector('#beer-list')
    );
    -->
  })
