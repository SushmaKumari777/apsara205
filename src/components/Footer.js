import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <footer className='footerarea'>
        <Container>
            <Row>
                <Col>
            <ul>
                <li>Home</li>
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
