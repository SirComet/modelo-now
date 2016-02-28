'use strict';

const React = require('react');
const Beer = require('./beer');
const Fetch = require('node-fetch');

const BeerList = React.createClass({
  componentWillMount: function () {
    Fetch('http://localhost:3000/api/beers/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        let beers = data;
        this.setState({
          beers
        });
      })
      .catch(err => {
        this.setState({
          beers: []
        })
      });
  },
  getInitialState: function () {
    return { beers: [] };
  },
  render: function () {
    return (
      <div>
        {
          this.state.beers.map((state) => {
            return (
              <Beer
                key={state._id}
                amount={state.amount}
                description={state.description}
                name={state.name}
                price={state.price}
                src={'img/' + state.img}
              />
            );
          })
        }
      </div>
    );
  }
});

module.exports = BeerList;
