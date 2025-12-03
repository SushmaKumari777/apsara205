import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";
import Menu from "./Menu";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';



const CustomerOrder = () => {

  const [orders, setOrders] = useState([]);

  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser)

  useEffect(() => {
    if (!currentUser) return;

    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/api/ssorders/user/${currentUser.id}`);
        console.log(response.data);
        setOrders(response.data);
      } catch (error) {
        console.log("Error while fetching orders", error);
      }
    };

    fetchOrders();
  }, [currentUser]);

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
            <Col>
              <h2>My Orders</h2>
            </Col>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>S no.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {

                orders.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={`http://localhost:8090/upload/${order.products[0]?.productDetails?.images[0]}`}
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "8px"
                          }}
                          alt="product"
                        />
                      </td>  
                      <td>
                        {order.products[0]?.productDetails?.productName || "N/A"}
                      </td>
                      <td>
                        {order.products[0]?.quantity || "N/A"}
                      </td>
                      <td>
                        ₹{order.products[0]?.productDetails?.productPrice || "N/A"}
                      </td>
                      <td>₹ {order.totalAmount}</td>
                      <td>
                      <Badge bg="primary">{order.status || "N/A"}</Badge>
                        </td>
                    </tr>
                  )
                }

                )

              }

            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  )
}

export default CustomerOrder