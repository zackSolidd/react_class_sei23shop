import React, { Component } from "react";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";
import Cart from "./Cart";
import CartFullInfo from "./CartFullInfo";

class AllItem extends Component {
  state = {
    items: [
      {
        imgurl:
          "https://vn-test-11.slatic.net/p/031dbea8b772b54ebaa077c0ac5648c0.jpg",
        name: "Summer Youth Men's Short-sleeved Shirt Korean Style Slim Fit",
        price: 120,
      },
      {
        imgurl:
          "https://my-test-11.slatic.net/p/48977eba66358d5ab0c900fe8460a66d.jpg",
        name: "FAVCENT shirt",
        price: 300,
      },
      {
        imgurl:
          "https://my-test-11.slatic.net/p/37809e2652e1bed581f7bdc5348b4406.jpg",
        name: "LA mens Dogdes",
        price: 110,
      },
      {
        imgurl:
          "https://sg-test-11.slatic.net/p/d3146d26a38cb4a1b90c6cb940c5daaf.jpg",
        name: "Face Mask High Quality",
        price: 50,
      },
      {
        imgurl:
          "https://sg-test-11.slatic.net/p/f1d465126512403dc502971ed59d8e7f.jpg",
        name: "face protection",
        price: 30,
      },
      {
        imgurl:
          "https://my-test-11.slatic.net/p/245795d2888a0d08bf5a00af4ee60ff7.jpg",
        name: "jersey",
        price: 300,
      },
      {
        imgurl:
          "https://my-test-11.slatic.net/p/aa153c669ee4111c91769ef41cdbdac8.jpg",
        name: "crappy",
        price: 20,
      },
      {
        imgurl:
          "https://sg-test-11.slatic.net/p/mdc/862ffe45ece925628e4a1d6c52374ceb.png",
        name: "coffee beans",
        price: 350,
      },
    ],
    cart: [],
    showCartState: false,
  };

  showCart = () => {
    console.log("showCart");
    this.setState({showCartState :!this.state.showCartState})
  }

  addToCart = (id) => {
    // console.log(id);
    // console.log(this.state.items[id]);

    let temp = { ...this.state };

    temp.cart.push(temp.items[id]);
    this.setState(temp);
  };

  render() {
    const cartMd = (this.state.showCartState) ? 3 : 9
    const fullMd = (this.state.showCartState) ? 0 : 12
    return (
      <div className="AllItem">
        <Cart items={this.state.cart} showCart = {this.showCart} />
        <Container>
          <div>All Items</div>
          <Row>
              {this.state.showCartState && (
            <Col md={cartMd}>
            Cart Full Info Here
            <CartFullInfo items={this.state.cart} />
            </Col>
          )}
            <Col md={fullMd}>
              <Row>
                {this.state.items.map((item, i) => (
                  <Item
                    addToCart={this.addToCart}
                    item={item}
                    itemId={i}
                    key={i}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AllItem;