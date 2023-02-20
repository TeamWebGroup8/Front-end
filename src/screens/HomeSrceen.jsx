import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllPizza from "../pizza-data";
import Pizza from "./../components/Pizza";
const HomeSrceen = () => {
  return (
    <div>
      <>
        <Container>
          <Row>
            {AllPizza.map((pizza) => (
              <Col md={4}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    </div>
  );
};

export default HomeSrceen;
