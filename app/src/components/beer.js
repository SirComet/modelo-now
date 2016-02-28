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
  render() {
    return (
      <div className="padding-top col-xs-6 col-md-4">
        <div className="item-container">
          <div className="details">
            <div className="details-divider-top">
              <div className="details-productshot">
                <img src="img/product-shot_2x.jpg" />
              </div>
              <div className="over-btn">
                <div className="add-btn">
                  <a href="#" >
                    <span className="glyphicon glyphicon-plus"></span>
                    Añadir al carrito
                  </a>
                </div>
              </div>
              <div className="details-productpackage"><span className="unit p-label">{this.props.amount} Pack</span></div>
            </div>
            <div className="details-divider-bottom">
              <div className="details-productinfo">
                <h3>{this.props.name}</h3>
                <p className="description">
                  <span className="vol">{this.props.description}</span><br />
                  <span className="price">${this.props.price}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Beer;
