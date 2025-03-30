import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={8}>
          <Card className="text-center shadow p-5">
            <Card.Body>
              <h1 className="mb-4">Welcome to User Auth App</h1>
              <p className="lead mb-4">
                This application allows users to register, log in, and view a static table
                after successful authentication.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button as={Link} to="/login" variant="primary" size="lg">
                  Login
                </Button>
                <Button as={Link} to="/register" variant="outline-primary" size="lg">
                  Register
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home; 