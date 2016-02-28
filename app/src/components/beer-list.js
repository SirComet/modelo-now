'use strict';

const React = require('react');
const Beer = require('./beer');

const BeerList = React.createClass({
  render() {
    return (
      <div>
        {
          this.props.beers.map((state) => {
            return (
              <div key={state.id}>
                <Beer name={state.name} />
              </div>
            )
          })
        }
      </div>
    );
  }
});

module.exports = BeerList;
