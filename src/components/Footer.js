import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <footer >
        <Container className='footerarea'>
            <Row>
                <Col>
            <ul>
                <li>
                  <div >
                  <ul className='about' >
                    <li>About</li>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Our stories</li>
                  </ul>
                  </div>
                  
                </li>
                <li>Women</li>
                <li>Men</li>
                <li>Contact us</li>
            </ul>
            </Col>
            </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
