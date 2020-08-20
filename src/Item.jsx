import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
export default class Item extends Component {
  state = {
    show: false,
  };

  showPriceInformation = () => {
    this.setState({ show: !this.state.show });
    // this.setState(prevState => ({show : !prevState.show}))
  };

  addItemToCart = (e) => {
    this.props.addToCart(e.target.id);
    // this.setState({ show: !this.state.show });
    // this.setState(prevState => ({show : !prevState.show}))
  };

  render() {
    return (
      <Col md="4" className="mb-3">
        <Card>
          <Card.Img variant="top" src={this.props.item.imgurl} />
          {/* <img src={this.props.item.imgurl} /> */}
          <Card.Body>
            <Card.Subtitle>{this.props.item.name}</Card.Subtitle>

            <button onClick={this.showPriceInformation} className="showPrice">
              show price
            </button>
            <button
              onClick={this.addItemToCart}
              id={this.props.itemId}
              className="showPrice"
            >
              Add To Cart
            </button>
          </Card.Body>

          {this.state.show && (
            <div className="itemPrice">{this.props.item.price}</div>
          )}
        </Card>
      </Col>
    );
  }
}