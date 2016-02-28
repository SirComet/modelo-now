'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Fetch = require('node-fetch');

const Promo = require('./promo');

const PromoList = React.createClass({
  componentWillMount: function () {
    Fetch('http://localhost:3000/api/promos')
      .then(response => response.json())
      .then(data => {
        this.setState({
          promos: data
        });
      });
  },
  getInitialState: function () {
    return {
      promos: []
    };
  },
  render: function () {
    return (
      <div>
        {
          this.state.promos.map(promo => {
            return (
              <Promo
                id={promo._id}
                name={promo.name}
              />
            );
          })
        }
      </div>
    );
  }
});

module.exports = PromoList;
