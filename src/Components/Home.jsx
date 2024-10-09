import home from "../Images/Home - Copy.jpeg";
import { Button, Row, Col } from "react-bootstrap";

const Home = ({ onGetStarted }) => {
  return (
    <section className="home text-center">
      <Row
        className="align-items-center justify-content-center"
        style={{ height: "70vh" }}>
        <Col md={6}>
          <img src={home} className="Home" />
          <h1>Welcome to Pure-Claim</h1>
          <p className="lead">Check product claims effortlessly.</p>
          <Button variant="success" className="mt-5" onClick={onGetStarted}>
            Get Started
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
