import React from 'react'
import Menu from "./Menu";
import { Col, Container, Row, Button } from "react-bootstrap";

const Wishlist = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Menu></Menu>
                </Col>
            </Row>
            <div>
                <h1>Wishlist</h1>
            </div>
        </div>
    )
}

export default Wishlist