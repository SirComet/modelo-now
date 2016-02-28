'use strict';

const React = require('react');

const Promo = React.createClass({
  render: function () {
    return (
      <tr key={this.props.id}>
        <td>
          <div className="col-md-6">
            <h4>{this.props.id}</h4>
            <p>{this.props.name}</p>
          </div>
          <div className="col-md-6">
            <button onClick={this.deleteElement} className="btn btn-danger btn-lg col-md-offset-10">
              Terminar promoción
            </button>
          </div>
        </td>
      </tr>
    );
  }
});

module.exports = Promo;
