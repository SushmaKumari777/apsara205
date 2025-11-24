import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import Menu from "./Menu";

const CustomerOrder = () => {
  return (
    <div>
        <Row>
                <Col>
                    <Menu></Menu>
                </Col>
            </Row>

            <div>
                <Row>
                    <Col>
                    <h1>Orders</h1>
                    </Col>
                </Row>
            </div>
    </div>
  )
}

export default CustomerOrder