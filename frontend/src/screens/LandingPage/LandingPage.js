import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './LandingPage.css';

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
          <button size="lg" className="ladingbutton"> Zaloguj sie</button>
          </a>
          <a href='register'> 
          <button> Zaresjestruj sie</button>
          </a>
            </div>

          </div>

      </Row>
    </Container>
  )
}

export default LandingPage
