import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const VerificationMethods = () => {
  return (
    <section className="verification-methods text-center">
      <h2>Select Verification Method</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={3} className="my-2">
          <Button variant="outline-primary" size="lg" block>
            URL
          </Button>
        </Col>
        <Col xs={12} md={3} className="my-2">
          <Button variant="outline-primary" size="lg" block>
            Manual
          </Button>
        </Col>
        <Col xs={12} md={3} className="my-2">
          <Button variant="outline-primary" size="lg" block>
            Barcode
          </Button>
        </Col>
        <Col xs={12} md={3} className="my-2">
          <Button variant="outline-primary" size="lg" block>
            Media
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default VerificationMethods;
