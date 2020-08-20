import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function CartFullInfo(props) {
  return (
    <div>
      {props.items.map((item, i) => (
        <Row key={i}>
          <Col>
            <Image src={item.imgurl} width={50} height={50} roundedCircle />
          </Col>
          <Col>{item.name}</Col>
        </Row>
      ))}
    </div>
  );
}

export default CartFullInfo;