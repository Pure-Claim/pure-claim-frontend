import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const Home = ({ onGetStarted }) => {
  return (
    <section className="home text-center">
      <Row className="align-items-center justify-content-center" style={{ height: "70vh" }}>
        <Col md={6}>
          <h1>Welcome to Pure-Claim</h1>
          <p className="lead">Check product claims effortlessly.</p>
          <Button variant="primary" onClick={onGetStarted}>
            Get Started
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
