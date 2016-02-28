'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const ProductList = require('./components/product-list');

ReactDOM.render(
  <ProductList />,
  document.querySelector('#product-list')
);
