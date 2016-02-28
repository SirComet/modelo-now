'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Fetch = require('node-fetch');

const Product = require('./product');

const ProductList = React.createClass({
  handleClick: function () {
    let node = ReactDOM.findDOMNode(this);

    console.log(node.innerHTML);
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
        <div>
          {this.state.products.map(prod => {
            return <Product name={prod.name} key={prod._id} />
          })}
        </div>
        <div>
          <button className="promo-confirm" onClick={this.handleClick}>Crear</button>
        </div>
      </div>
    );
  }
});

module.exports = ProductList;
