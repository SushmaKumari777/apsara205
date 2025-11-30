// import { Formik } from 'formik';
import React, { useState, useEffect } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import Menu from "./Menu";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

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

  // const orders = [
  //   {
  //     id: "1",
  //     items: [
  //       {
  //         productName: "Noorika Full-sleeves",
  //         ProductCategory: "",
  //         productPrice: 599,
  //         productQuantity: 2
  //       },
  //       {
  //         productName: "Noorika Full-sleeves",
  //         ProductCategory: "",
  //         productPrice: 599,
  //         productQuantity: 2

  //       }

  //     ],
  //     total: 499,
  //     discount: 10,
  //     grandTotal: 500,
  //     status: 0
  //   },
  //   {
  //     id: "2",
  //     items: [
  //       {
  //         productName: "Full-sleeves",
  //         ProductCategory: "",
  //         productPrice: 399,
  //         productQuantity: 3

  //       },
  //       {
  //         productName: "Full-sleeves",
  //         ProductCategory: "",
  //         productPrice: 399,
  //         productQuantity: 4

  //       }

  //     ],
  //     total: 599,
  //     discount: 10,
  //     grandTotal: 500,
  //     status: 0
  //   }


  // ]
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
      <Row>
        <Col>
          <h1 className='text-center'>Orders</h1>
        </Col>
      </Row>
      <Table Striped rows hover>
        <tbody>
          {
            orders.map((order, index) => {
              return (
                <tr key={index}>
                  {/* <td>
                    {order.id}
                  </td> */}
                  <td>
                    {orders ? (
                      orders.map((order, index) => (
                        <tr key={index}>
                          <td>{order.id}</td>
                          <td>
                            {
                              order?.products?.map((item, index) => (
                                <p key={index}>  {item.productDetails.productName}  Rs. {item.productDetails.productPrice} X {item.quantity} = {item.productDetails.productPrice * item.quantity}</p>
                              ))
                            }
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>No orders found</p>
                    )}
                    <hr />
                    <p>Total : {order.totalAmount}</p>
                    <p>Grand Total : {order.totalAmount}</p>

                  </td>

                  <td>
                    <p> status : {status[order.status]}</p>
                  </td>
                  <td>
                    <Formik initialValues={{ orderStatus: order.status }}
                    // validationSchema={CategorySchema}
                    // onSubmit={handleSubmit}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div>
                            <Row>
                              <Field name="orderStatus" as="select" className="inputbox" onChange={() => orderStatusUpdate(order.id)}>
                                {
                                  status.map((data, index) => {
                                    return (
                                      <option key={index} value={index}>
                                        {data}
                                      </option>
                                    )
                                  }

                                  )
                                }
                              </Field>
                            </Row>

                          </div>
                        </Form>
                      )}
                    </Formik>
                  </td>
                </tr>
              )
            }

            )
          }
        </tbody>

      </Table>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>User Id</th>
              <th>Address ID</th>
           
              <th>Poduct Name</th>
              <th>Image</th>
              {/* <th>Category</th> */}
              <th>Gender</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, orderIndex) =>
              order.products.map((item, productIndex) => (
                <tr key={`${orderIndex}-${productIndex}`}>

                  {/* ORDER ID */}
                  <td>{order.id}</td>

                  {/* USER ID */}
                  <td>{order.userId}</td>

                  {/* ADDRESS ID */}
                  <td>{order.addressId}</td>

        
                 
                  <td>{item.productDetails.productName}</td>
                  <td>
                    {/* {item.productDetails.images[0]} */}
                    <img src={`http://localhost:8090/upload/${item.productDetails.images[0]}`}
                      style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                    />
                  </td>
                  {/* <td>{item.productDetails.productCategory}</td> */}
                  <td>{item.productDetails.productGender}</td>

                  {/* QUANTITY */}
                  <td>{item.quantity}</td>

                  {/* PRICE */}
                  <td>₹ {item.productDetails.productPrice}</td>

                  {/* SUBTOTAL */}
                  <td>₹ {item.quantity * item.productDetails.productPrice}</td>

                  {/* STATUS */}
                  <td>{order.status}</td>

                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default AdminOrders
