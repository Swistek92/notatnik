import React from 'react'
import { Card , Container, Row, Col,  } from 'react-bootstrap'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer"> 
   
    <Container>
    <Row>
      <Col className="text-center py-3">Copyright &opy; noteBook by Swistek </Col>
    </Row>
    </Container>
    </footer>
  )
}

export default Footer