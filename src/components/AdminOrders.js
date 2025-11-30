// import { Formik } from 'formik';
import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import Menu from "./Menu";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AdminOrders.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const AdminOrders = () => {

  const navigate = useNavigate();

  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser)

  useEffect(() => {
    if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
      console.log(currentUser.roles[0]);
      navigate("/")
    }
  }, [currentUser, navigate]);



  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/api/ssorders")
      .then((res) => {
        console.log("Fetched Orders:", res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("Failed to fetch orders", err);
      });
  }, []);
  // const [orders, setOrders] = useState();

  // useEffect(() => {
  //   axios.get('http://localhost:8090/api/ssorders').then((response) => {
  //     console.log(response.data);
  //     setOrders(response.data)
  //   })
  // }, []);
  const status = [
    "pending",
    "Order Placed",
    "Processing",
    "Order shipped",
    "Out For deleverd",
    "Return Accepted",
    "Return Process complete",
    "Canceled"
  ]

  const orderStatusUpdate = (orderId, newStatus) => {
    console.log(orderId)
    console.log(newStatus)

    axios.put(`http://localhost:8090/api/ssorders/user/${currentUser.id}/${orderId}/status`).then(() => {
      window.location.reload();

    })
      .catch((error) => { console.error("Failed to update status", error); });

  }
  // const { user: currentUser } = useSelector((state) => state.auth);
  // console.log(currentUser)


  return (
    <div>
      <Row>
        <Col><Menu></Menu></Col>
      </Row>
     
      <Container fluid>
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
          <h2 className='text-center' style={{ color: "#641E16" }}>All Orders</h2>
        </Col>
      </Row>
        <div class="d-flex justify-content-center">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>Order Id</th>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>User Id</th>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>Address ID</th>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>Poduct Name</th>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>Image</th>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>Gender</th>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>Quantity</th>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>Price</th>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>Subtotal</th>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>Total</th>
                <th style={{ backgroundColor: "#641E16", color: "white" }} className='text-center'>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, orderIndex) => (

                order.products.map((item, productIndex) => (

                  <tr key={`${orderIndex}-${productIndex}`}>

                    {productIndex === 0 && (
                      <>
                        <td rowSpan={order.products.length} style={{ color: "#641E16", verticalAlign: "middle" }} data-label="Order ID : ">
                          {order.id}
                        </td>

                        <td rowSpan={order.products.length} style={{ color: "#641E16", verticalAlign: "middle" }} data-label="User ID : ">
                          {order.userId}
                        </td>

                        <td rowSpan={order.products.length} style={{ color: "#641E16", verticalAlign: "middle" }} data-label="Address ID : ">
                          {order.addressId}
                        </td>
                      </>
                    )}

                    <td style={{ color: "#641E16" }} data-label="Product Name : ">
                      {item.productDetails.productName}
                    </td>
                    <td>
                      <img
                        src={`http://localhost:8090/upload/${item.productDetails.images[0]}`}
                        style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                      />
                    </td>
                    <td style={{ color: "#641E16" }}>
                      {item.productDetails.productGender}
                    </td>
                    <td style={{ color: "#641E16" }} className="text-center" data-label="Quantity: ">
                      {item.quantity}
                    </td>
                    <td style={{ color: "#641E16" }} className="text-center" data-label="Price : ">
                      ₹{item.productDetails.productPrice}
                    </td>
                    <td style={{ color: "#641E16" }} className="text-center" data-label="Subtotal : " >
                      ₹{item.quantity * item.productDetails.productPrice}
                    </td>

                    {
                      productIndex === 0 && (

                        <td
                          data-label="Total : "
                          rowSpan={order.products.length}
                          style={{ color: "#641E16", fontWeight: "bold", verticalAlign: "middle" }}
                        >
                          ₹ {order.totalAmount}
                        </td>
                      )}


                    {
                      productIndex === 0 && (

                        <td
                          rowSpan={order.products.length}
                          style={{ color: "#641E16", fontWeight: "bold", verticalAlign: "middle" }}
                        >
                          {order.status}
                        </td>
                      )}

                  </tr>
                ))
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="9" style={{ fontWeight: "bold", backgroundColor: "#EEEEEE", color: "#641E16" }} >Grand Total (All Orders)</td>
                <td style={{ fontWeight: "bold", backgroundColor: "#641E16", color: "white" }}>
                  ₹ {orders.reduce((acc, curr) => acc + curr.totalAmount, 0)}
                </td>
              </tr>
            </tfoot>

          </Table>
        </div>
      </Container>
    </div>
  )
}

export default AdminOrders
