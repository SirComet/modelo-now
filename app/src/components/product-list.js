'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Fetch = require('node-fetch');

const Product = require('./product');

const ProductList = React.createClass({
  handleClick: function () {
    console.log(ReactDOM.findDOMNode(this));
  },
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
      <div>
        <table className="table table-striped table-bordered table-hover">
          {this.state.products.map(prod => {
            return <Product name={prod.name} key={prod._id} />
          })}
        </table>
        <div>
          <button onClick={this.handleClick} className="btn btn-primary btn-lg">Crear</button>
        </div>
      </div>
    );
  }
});

module.exports = ProductList;
