import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Cart = () => {

    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h3>Your Cart</h3>
                            <p>Product</p>
                        </Col>
                        <Col>
                            <p>Total</p>
                        </Col>
                        <hr></hr>
                    </Row>
                    <Row>
                        <Col md={4}>

                        </Col>
                        <Col md={4}>
                            <p>Rs.</p>
                            <p>Size</p>
                        </Col>
                        <Col md={4}>
                            <h4>Rs.</h4>
                        </Col>
                        <hr></hr>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>Estimated total</p>
                        </Col>
                        <Col md={6}>
                            <h4>Rs.</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Taxes included. Discounts and shipping calculated at checkout.</p>
                            <Button>check out</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default Cart