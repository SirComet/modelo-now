'use strict';

const React = require('react');

const Product = React.createClass({
  getInitialState: function () {
    return {
      descount: 0,
      checked: false
    };
  },
  handleCheck: function () {
    let checked = !this.state.checked;
    this.setState({ checked });
  },
  increment: function () {
    let descount = this.state.descount + 1;
    this.setState({ descount });
  },
  decrement: function () {
    let descount = this.state.descount - 1;

    if (descount >= 0) {
      this.setState({ descount });
    }
  },
  render: function () {
    return (
      <div className="beer">
        <div>
          <input className="beer-status"  onClick={this.handleCheck} type="checkbox" checked={this.state.checked} />
          <h4 className="beer-name">{this.props.name}</h4>
        </div>
        <div className="descount">
          <button className="descount-button" onClick={this.decrement}>-</button>
          <p className="descount-percentage">{this.state.descount}</p>
          <button className="descount-button" onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
});

module.exports = Product;
