// import { Formik } from 'formik';
import React from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';

const AdminOrders = () => {
  const orders = [
    {
      id: "1",
      items: [
        {
          productName: "Noorika Full-sleeves",
          ProductCategory: "",
          productPrice: 599,
          productQuantity: 2
        },
        {
          productName: "Noorika Full-sleeves",
          ProductCategory: "",
          productPrice: 599,
          productQuantity: 2

        }

      ],
      total: 499,
      discount: 10,
      grandTotal: 500,
      status: 0
    },
    {
      id: "2",
      items: [
        {
          productName: "Full-sleeves",
          ProductCategory: "",
          productPrice: 399,
          productQuantity: 3

        },
        {
          productName: "Full-sleeves",
          ProductCategory: "",
          productPrice: 399,
          productQuantity: 4

        }

      ],
      total: 599,
      discount: 10,
      grandTotal: 500,
      status: 0
    }


  ]
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

    // axios.put(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${productId}`, { quantity: newQuantity }).then(() => {
    //   window.location.reload();

    // }).catch((error) => { console.error("Failed to update quantity", error); });

  }


  return (
    <div>
      <Table>
        <tbody>
          {
            orders.map((order, index) => {
              return (
                <tr>
                  <td>
                    {order.id}

                  </td>
                  <td>
                    {
                      order.items.map((item, index) => {
                        return (
                          <p>  {item.productName}   Rs. {item.productPrice} X {item.productQuantity} = {item.productPrice * item.productQuantity}

                          </p>

                        )
                      }

                      )
                    }
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
                              
                              <Field name="orderStatus" as="select" className="inputbox" onChange={() => orderStatusUpdate(order.id, formorderStatus)}>
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
        </tbody>
      </Table>
    </div>
  )
}

export default AdminOrders
