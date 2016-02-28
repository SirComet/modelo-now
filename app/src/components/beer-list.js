'use strict';

const React = require('react');
const Beer = require('./beer');

const BeerList = React.createClass({
  addToCart: function (evt) {
    console.log(evt);
  },
  render: function () {
    return (
      <div>
        {
          this.props.beers.map((state) => {
            return (
              <Beer
                amount={state.amount}
                description={state.description}
                name={state.name}
                price={state.price}
              />
            );
          })
        }
      </div>
    );
  }
});

module.exports = BeerList;
