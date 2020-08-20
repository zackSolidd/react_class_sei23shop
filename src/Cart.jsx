import React, { Component } from "react";

export default class Cart extends Component {


  render() {
    return (
      <div>
        <h1>Cart {this.props.items.length}</h1>
        <button onClick={this.props.showCart}>
              Show Cart
            </button>
      </div>
    );
  }
}