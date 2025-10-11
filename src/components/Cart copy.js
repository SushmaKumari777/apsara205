// // import React from 'react'
// // import { Container, Row, Col, Button } from 'react-bootstrap'
// import Menu from "./Menu";
// import React, { useState } from "react";
// import { Container, Row, Col, Button, Table } from "react-bootstrap";
// import "./cart.css";
// const Cart = () => {

//     return (
//         <div>

//             <Container>
//                 <Row>
//                     <Col>
//                         <Menu></Menu>
//                     </Col>
//                 </Row>
                
//             </Container>
//             <Container className="cart-container mt-5">
//       <Row>
//         <Col>
//           <h2 className="text-center mb-4"> Your Cart</h2>

//           {cartItems.length === 0 ? (
//             <h4 className="text-center">Your cart is empty</h4>
//           ) : (
//             <Table bordered hover responsive className="cart-table">
//               <thead className="table-header">
//                 <tr>
//                   <th>Product</th>
//                   <th>Name</th>
//                   <th>Price (₹)</th>
//                   <th>Quantity</th>
//                   <th>Total (₹)</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item.id}>
//                     <td>
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="cart-img"
//                       />
//                     </td>
//                     <td>{item.name}</td>
//                     <td>{item.price}</td>
//                     <td>
//                       <Button
//                         variant="light"
//                         size="sm"
//                         onClick={() => decreaseQty(item.id)}
//                       >
//                         −
//                       </Button>{" "}
//                       <span className="mx-2">{item.quantity}</span>
//                       <Button
//                         variant="light"
//                         size="sm"
//                         onClick={() => increaseQty(item.id)}
//                       >
//                         +
//                       </Button>
//                     </td>
//                     <td>{item.price * item.quantity}</td>
//                     <td>
//                       <Button
//                         variant="danger"
//                         size="sm"
//                         onClick={() => removeItem(item.id)}
//                       >
//                         Remove
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//                 <tr className="table-total">
//                   <td colSpan="4" className="text-end fw-bold">
//                     Grand Total:
//                   </td>
//                   <td colSpan="2" className="fw-bold">
//                     ₹{totalAmount}
//                   </td>
//                 </tr>
//               </tbody>
//             </Table>
//           )}
//         </Col>
//       </Row>
//     </Container>
//             {/* <section>
//                 <Container>
//                     <Row>
//                         <Col>
//                             <h3>Your Cart</h3>
//                             <p>Product</p>
//                         </Col>
//                         <Col>
//                             <p>Total</p>
//                         </Col>
//                         <hr></hr>
//                     </Row>
//                     <Row>
//                         <Col md={4}>

//                         </Col>
//                         <Col md={4}>
//                             <p>Rs.</p>
//                             <p>Size</p>
//                         </Col>
//                         <Col md={4}>
//                             <h4>Rs.</h4>
//                         </Col>
//                         <hr></hr>
//                     </Row>
//                     <Row>
//                         <Col md={6}>
//                             <p>Estimated total</p>
//                         </Col>
//                         <Col md={6}>
//                             <h4>Rs.</h4>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col>
//                             <p>Taxes included. Discounts and shipping calculated at checkout.</p>
//                             <Button>check out</Button>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section> */}

//         </div>
//     )
// }

// export default Cart