'use strict';

const React = require('react');

const Beer = React.createClass({
  propTypes: {
    count: React.PropTypes.number
  },
  getInitialState: function() {
    return {
      count: 0
    };
  },
  minusOne() {
    if (this.state.count > 0) {
      let count = this.state.count - 1;
      this.setState({ count });
    }
  },
  plusOne() {
    let count = this.state.count + 1;
    this.setState({ count });
  },
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.state.count}</p>
        <button onClick={this.minusOne}>-</button>
        <button onClick={this.plusOne}>+</button>
      </div>
    );
  }
});

module.exports = Beer;
