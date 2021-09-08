import React from 'react'
import { Card , Button, Container, Row, Col } from 'react-bootstrap'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer"> 
    <Card>
  <Card.Header>Twójca strony nie ponosi odpowiedzialności za ten klnefel</Card.Header>
  <Card.Body>
    <Button target="_blank" href="https://youtu.be/SkgTxQm9DWM" variant="primary">Złuooo</Button>
  </Card.Body>
</Card>
    <Container>
    <Row>
      <Col className="text-center py-3">Copyright &opy; Notatnik </Col>
    </Row>
    </Container>
    </footer>
  )
}

export default Footer