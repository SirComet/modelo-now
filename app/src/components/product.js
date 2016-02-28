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
      <tr>
        <td>
          <div className="col-md-4">
            <div className="checkbox">
              <label>
                <input onClick={this.handleCheck} type="checkbox" checked={this.state.checked} />
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <h4>{this.props.name}</h4>
          </div>
          <div className="col-md-4">
            <p>{this.state.descount}</p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
        </td>
      </tr>
    );
  }
});

module.exports = Product;
