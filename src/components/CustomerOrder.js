import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";
import Menu from "./Menu";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from 'axios';



const CustomerOrder = () => {
  const navigate = useNavigate();

  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser)

  useEffect(() => {
    if (currentUser && currentUser.roles[0] !== "ROLE_USER") {
      console.log(currentUser.roles[0]);
      navigate("AdminDashboard")
    }
  }, [currentUser, navigate]);



  // const [products, setProducts] = useState();

  // useEffect(() => {
  //   axios.get(`http://localhost:8090/api/ssorders/user/${currentUser.id}`).then((response) => {
  //     console.log(response.data.items)
  //     console.log(response.data)
  //     // setProducts(response.data.items)
  //     // setNoCartItems(response.data.itemCount)
  //     // const reversedItems = [...response.data.items].reverse();
  //     // setProducts(reversedItems);
  //     // setNoCartItems(response.data.itemCount);
  //   })
  // }, []);


  return (
    <div>
      <Row>
        <Col>
          <Menu></Menu>
        </Col>
      </Row>

      <div>
        <Container>
          <Row>
            <Col style={{ color: "#641E16", }}>
              <Breadcrumb>
                {/* <Breadcrumb.Item href="#">All products</Breadcrumb.Item> */}
                <Breadcrumb.Item href="adminDashboard"> Admin Dashboard </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col>
            <h2>My Orders</h2>
            </Col>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  )
}

export default CustomerOrder