'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const ProductList = require('./components/product-list');
const PromoList = require('./components/promo-list');

ReactDOM.render(
  <ProductList />,
  document.querySelector('#product-list')
);
