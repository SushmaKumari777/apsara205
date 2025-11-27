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

    // axios.put(`http://localhost:8090/api/ssorders/${currentUser.id}/${orderId}/status`).then(() => {
    //   window.location.reload();

    // })
    // .catch((error) => { console.error("Failed to update status", error); });

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
      <Table>
        <tbody>
          {
            orders.map((order, index) => {
              return (
                <tr key={index}>
                  {/* <td>
                    {order.id}
                  </td> */}
                  <td>
                    {/* {
                      order.items.map((item, index) => {
                        return (
                          <p key={index}>  {item.productName}   Rs. {item.productPrice} X {item.productQuantity} = {item.productPrice * item.productQuantity}

                          </p>

                        )
                      }
                      )
                    } */}
                    {orders && orders.length > 0 ? (
                      orders.map((order, index) => (
                        <tr key={index}>
                          <td>{order?.id}</td>
                          <td>
                            {order?.items?.map((item, index) => (
                              <p key={index}>{item.productName} Rs. {item.productPrice} X {item.productQuantity} = {item.productPrice * item.productQuantity}</p>
                            ))}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>No orders found</p>
                    )}
                    <hr />
                    <p>Total : {order.total}</p>
                    <p>Grand Total : {order.grandTotal}</p>

                  </td>

                  <td>
                    <p> status : {status[order.status]}</p>
                  </td>
                  <td>
                    <Formik
                      initialValues={{
                        orderStatus: '',
                      }}
                    // validationSchema={CategorySchema}
                    // onSubmit={handleSubmit}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div>
                            <Row >

                              <Field name="orderStatus" as="select" className="inputbox" onChange={() => orderStatusUpdate(order.id)}>

                                {
                                  status.map((data, index) => {
                                    return (
                                      <option value={index}>{data}</option>
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
          {/* {orders && orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order?.id}</td>
                <td>
                  {order?.items?.map((item, i) => (
                    <p key={i}>{item.productName}</p>
                  ))}
                </td>
              </tr>
            ))
          ) : (
            <p>No orders found</p>
          )} */}
        </tbody>
      </Table>
    </div>
  )
}

export default AdminOrders
