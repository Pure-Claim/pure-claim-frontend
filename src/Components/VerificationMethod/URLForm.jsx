import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const URLInput = () => {
  return (
    <section className="url-input text-center">
      <h3>Enter Product URL</h3>
      <Form>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form.Group controlId="formURL">
              <Form.Control type="url" placeholder="Enter product URL" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default URLInput;
