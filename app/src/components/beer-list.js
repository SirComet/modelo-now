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
              <div class="padding-top col-xs-6 col-md-4">
                <div class="item-container">
                  <div class="details">
                    <div class="details-divider-top">
                      <div class="details-productshot">
                        <img src="img/product-shot_2x.jpg" />
                      </div>
                      <div class="over-btn">
                        <div class="add-btn">
                          <a href="#" onClick={this.addToCart} >
                            <span class="glyphicon glyphicon-plus"></span>
                            Añadir al carrito
                          </a>
                        </div>
                      </div>
                      <div class="details-productpackage"><span class="unit p-label">{this.props.amount} Pack</span></div>
                    </div>
                    <div class="details-divider-bottom">
                      <div class="details-productinfo">
                        <h3>{this.props.name}</h3>
                        <p class="description">
                          <span class="vol">{this.props.description}</span><br />
                          <span class="price">${this.props.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
});

module.exports = BeerList;
