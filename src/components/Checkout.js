import React from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'

const Checkout = () => {
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h4>Delevery</h4>
                                    <Form.Select aria-label="Default select example">
                                        <option>Country/Region</option>
                                        <option value="1">India</option>

                                    </Form.Select>
                                    <br></br>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Control placeholder="First name" />
                                            </Col>
                                            <Col>
                                                <Form.Control placeholder="Last name" />
                                            </Col>
                                        </Row>
                                    </Form>
                                    <br></br>
                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Select defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control />
                                            <br></br>
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control type="phone" placeholder="Phone" />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Text me with news and offers" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <h3>Payment</h3>
                                <p>All transactions are secure and encrypted.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Checkout
