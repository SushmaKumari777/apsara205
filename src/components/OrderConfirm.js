import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { BsCheck2Circle } from "react-icons/bs";
import Menu from "./Menu";

const OrderConfirm = () => {
    return (
        <div>
            <div>
                <Row>
                    <Col>
                        <Menu></Menu>
                    </Col>
                </Row>
            </div>
            <section>
                <Container>

                    <Row>
                        <Col style={{ backgroundColor: "#D4D4D4", borderRadius: "10px", margin: "30px" }}>
                            <p className='text-center' style={{ color: "#641E16", fontSize: "80px" }}><BsCheck2Circle /></p>
                            <p className='text-center' style={{ color: "#641E16" }}>Hey! Sushma Kumari</p>
                            <h2 className='text-center' style={{ color: "#641E16" }}>Your Order is Confirmed !</h2>
                            <p className='text-center' style={{ color: "#641E16" }}> We will send you a shopping confirmation email as soon as your order ships</p>
                            <div style={{ textAlign: "center", margin: "10px", }}>
                                <Button style={{ backgroundColor: "#641E16", color: "white", border: "#6C757D", padding: "10px", fontSize: "22px" }}> Check status</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default OrderConfirm
