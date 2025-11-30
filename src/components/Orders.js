import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Menu from "./Menu";
import { Container,Row,Col,Table} from "react-bootstrap";

const Orders = () => {

  return (
    <div>
      <div>
        <Row>
          <Col>
            <Menu></Menu>
          </Col>
        </Row>
      </div>
      <Container fluid>
      <Table>
        <thead>

        </thead>
        <tbody>

        </tbody>
      </Table>
      </Container>
    </div>
  )
}

export default Orders