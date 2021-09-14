import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import "./LoginScreen.css"
const LoginScreen = () => {
  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />} */}
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              // value={email}
              placeholder="Enter email"
              // onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              // value={password}
              placeholder="Password"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
<br/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Świeżak ? <Link to="/register">Rejestracja</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}
export default LoginScreen;