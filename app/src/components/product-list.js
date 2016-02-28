'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Fetch = require('node-fetch');

const Product = require('./product');

const ProductList = React.createClass({
  componentWillMount: function () {
    Fetch('http://localhost:3000/api/beers')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        })
      })
      .catch(err => this.setState({ products: [] }));
  },
  getInitialState: function () {
    return { products: [] };
  },
  render: function () {
    return (
      <table className="table table-striped table-bordered table-hover">
        {this.state.products.map(prod => {
          return <Product name={prod.name} />
        })}
      </table>
    );
  }
});

module.exports = ProductList;
