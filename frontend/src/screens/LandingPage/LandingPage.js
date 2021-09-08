import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './LandingPage.css';
import Button from 'react-bootstrap/Button';


const LandingPage = () => {
  return (
    <Container className="main">
      <Row>
          <div className='intro-text'>
            <div>
              <h1 className="title"><b>Notatnik dla Ciebie dla rodziny!</b> </h1>
              <p className="subtitle">bezpieczne miejsce dla twoich notatek <br/> haaaaa</p>
            </div>
            <div className="buttonContainer">
          <a href='login'> 
          <Button size="lg" className="ladingbutton" variant="danger"> Zaloguj sie</Button>
          </a>
          <a href='register'> 
          <Button size="lg" className="ladingbutton" variant="success"> Zaresjestruj sie</Button>
          </a>
            </div>

          </div>

      </Row>
    </Container>
  )
}

export default LandingPage
