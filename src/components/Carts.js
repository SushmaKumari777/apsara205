
import React, { useState, useEffect } from 'react'
import Menu from "./Menu";
import Address from "./Address";
import { Container, Row, Col, Table, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from "../slices/message";
import axios from 'axios';
import { CiSquareRemove } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from 'react-router'
import { Formik, Field, Form } from 'formik';
import Badge from 'react-bootstrap/Badge';
import { BsPlus } from "react-icons/bs";


const Carts = () => {

  // const dispatch = useDispatch();
  const [products, setProducts] = useState();
  const [count, setCount] = useState(1);
  const [noCartItems, setNoCartItems] = useState();
  const [addresses, setAddresses] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get(`http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
      console.log(response.data.items)
      console.log(response.data)
      // setProducts(response.data.items)
      // setNoCartItems(response.data.itemCount)
      const reversedItems = [...response.data.items].reverse();
      setProducts(reversedItems);
      setNoCartItems(response.data.itemCount);
    })
    axios.get(`http://localhost:8090/api/addresses/user/${currentUser.id}`).then((response) => {

      console.log(response.data)
      setAddresses(response.data)

    })
  }, []);


  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser)

  // const [name, setName] = useState("");
  const decrement = () => {
    setCount(count - 1);
  }
  const increment = () => {
    setCount(count + 1);
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      axios.delete(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${id}`).then((response) => {
        console.log('Product successfully deleted')
        alert('Product successfully deleted')
        window.location.reload();
      })
    }
  }


  const calculateTotal = () => {
    //check products is an array or not, if products is not an array then exit
    if (!Array.isArray(products)) return 0;
    return products.reduce((total, product) => {
      return total + (product.quantity * product.productDetails.productPrice);
    }, 0);
  };

  const subTotal = calculateTotal();
  console.log(subTotal)


  const discount = () => {
    let value = 0
    if (subTotal > 5000) {
      value = 500;
    }
    else if (subTotal > 2000) {
      value = 200;
    }
    else {
      value = 0;
    }
    return value;
  }
  const discountValue = discount();
  console.log(discountValue)

  const grandTotal = subTotal - discountValue;


  const quantityUpdate = (productId, newQuantity) => {
    console.log(productId)
    console.log(newQuantity)
    if (newQuantity < 1) return;
    axios.put(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${productId}`, { quantity: newQuantity }).then(() => {
      window.location.reload();

    }).catch((error) => { console.error("Failed to update quantity", error); });

  }





  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      axios.delete(`http://localhost:8090/api/addresses/${id}`).then((response) => {
        console.log('Product successfully deleted')
        alert('Product successfully deleted')
        window.location.reload();
      })
    }
  }


  const handleOrder = async (formValue, resetForm) => {
    const { addressId } = formValue;
    // setLoading(true);

    console.log(addressId)
    // try {
    //     const res = await axios.post("http://localhost:8090/api/cats", formValue);
    //     console.log("category name succesfully added:", res.data);
    //     alert("category name added successfully!");
    //     // resetForm();
    //     window.location.reload();
    // } catch (err) {
    //     console.error(" Failed to add category name", err);
    //     alert("Failed to add category name");
    // }
};


  return (
    <div>
      <div>
        <Row>
          <Col>
            <Menu></Menu>
          </Col>
        </Row>
      </div>
      <div>

        <Container>
          <Row>
            <Col>
              <h1 className='text-center'>
                Your Cart ({noCartItems})
              </h1>
            </Col>
          </Row>
          <Row>
            <Col >
              <Table Striped rows hover>
                <thead>
                  <tr>
                    <th className='text-center'>S.No.</th>                  
                    <th className='text-center'></th>
                    <th >Products</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>Quantity</th>
                    <th className='text-center'>Total price</th>
                    <th className='text-center'>Remove</th>

                  </tr>
                </thead>
                <tbody>


                  {
                    products ?
                      products.map((product, index) => {
                        return (
                          // <Link to={`/products/${product.id}`}>
                          <tr key={index}>

                            <td className='text-center'>{index + 1}</td>
                            <td className='text-center'>
                              <img src={`http://localhost:8090/upload/${product.productDetails.images[0]}`}
                                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                              />
                            </td>
                            <td>
                             <p>  {product.productDetails.productName}</p>                       
                            </td>
                            <td className='text-center'>Rs. {product.productDetails.productPrice}.00</td>
                            <td className='text-center'>
                              {/* <button onClick={() => quantityUpdate(product.productId, product.quantity - 1)}>-</button>
                              &nbsp;
                              {product.quantity}
                              &nbsp;
                              <button onClick={() => quantityUpdate(product.productId, product.quantity + 1)}>+</button> */}

                              <button
                                style={{
                                  color: "#641E16",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  width: "100px",
                                  padding: "5px 10px",
                                  border: "1px solid #ccc",
                                  borderRadius: "5px",
                                  backgroundColor: "white",
                                }}
                              >
                                <span onClick={() => quantityUpdate(product.productId, product.quantity - 1)} style={{ cursor: "pointer" }}>
                                  <b>-</b>
                                </span>
                                <span>{product.quantity}</span>
                                <span onClick={() => quantityUpdate(product.productId, product.quantity + 1)} style={{ cursor: "pointer" }}>
                                  <b>+</b>
                                </span>
                              </button>
                            </td>

                            <td className='text-center'>
                              Rs. {product.quantity * product.productDetails.productPrice}.00
                            </td>

                            <td className='text-center'>
                              <button onClick={() => handleDelete(product.productId)}
                                style={{
                                  color: "#641E16",
                                  alignItems: "center",
                                  border: "1px solid #ccc"
                                }}
                              ><MdDelete /> </button>
                            </td>


                          </tr>
                          // </Link>
                        )

                      }
                      )
                      : <tr>
                        <td colSpan={4}>Your cart is empty</td>
                      </tr>
                  }

                </tbody>

              </Table>
            </Col>
          </Row>

          <Row>
            <Col>
            <Row>
            <Col>
              <div className='delivery-address'>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    {/* <Modal.Title>Modal title</Modal.Title> */}
                  </Modal.Header>

                  <Modal.Body>
                    <Address />
                  </Modal.Body>

                  {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                  {/* </Modal.Footer> */} 
                </Modal>
                <Formik
                  initialValues={{
                    addressId: '',
                  }}
                  // onSubmit={async (values) => {
                  //   await new Promise((r) => setTimeout(r, 500));
                  //   alert(JSON.stringify(values, null, 2));
                  //   console.log(values)
                  // }}
                  onSubmit={handleOrder}
                >
                  {({ values }) => (
                    <Form>



                      {/* <div role="group" aria-labelledby="my-radio-group"> */}
                      <Table Striped rows hover >
                        <thead>
                          <tr>
                            <th style={{ backgroundColor: "#641E16", color: "white", }}>
                              <h5>Delivery Address </h5>
                            </th>
                          </tr>
                          <tr>
                           
                           <th>
                             <p onClick={handleShow} style={{color:"#641E16"}}><BsPlus  style={{color:"#641E16",fontWeight: "400"}}/> <b>Add a new address</b> </p>
                           </th>
                         </tr>
                        </thead>
                        <tbody>

                          {
                            addresses ? addresses.map((address, index) => {
                              return (
                                // <Row key="index">
                                //   <Col>
                                <tr key={index}>
                                  <td>

                                    <Field type="radio" name="addressId" value={address.id} /> &nbsp; <b>{address.name}</b> &nbsp;<Badge bg="dark" > {address.addressType.toUpperCase()} </Badge> &nbsp;{address.mobile}
                                    <p>{address.addressLine1}, {address.addressLine2}, {address.city}, {address.district}, {address.state} - <b>{address.pin}</b>
                                    <br></br>
                                     Gmail - {address.email}</p>
                                    <p></p>
                                    <Button onClick={() => handleRemove(address.id)} style={{backgroundColor:"#D4D4D4",color:"black",border:"#6C757D"}}>Remove</Button>
                                    &nbsp;
                                    {/* <Button variant="outline-secondary">Edit</Button> */}
                                   
                                  </td>
                                  
                                </tr>
                              )
                            })
                              : "no address available"
                          }                       
                          <div>Picked: {values.addressId}</div>
                          
                          <button type="button" class="btn btn-success"
                            style={{
                              color: "#641E16",
                              // fontWeight: "400"
                            }}
                          >Submit </button>
                        </tbody>
                      </Table>
                      {/* </div> */}


                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
            </Col>
            <Col>
              <Table>
                <tbody
                  style={{
                    color: "#641E16"
                  }}
                >
                  <tr>
                    <td>Subtotal  :</td>
                    <td>
                      <p> Rs. {subTotal.toFixed(2)}</p>
                    </td>
                  </tr>

                  <tr>
                    <td> Discount  :</td>
                    <td><p> Rs. {discountValue.toFixed(2)}</p>
                    </td>
                  </tr>
                  <tr>
                    <td> Grand Total  :</td>
                    <td><p>Rs. {grandTotal.toFixed(2)}</p></td>
                  </tr>
                  <tr>
                    <td> Coupon code:</td>
                    <td> Add Coupon</td>
                  </tr>
                  <tr>
                    <td>
                      <button type="button" class="btn btn-light">
                        <Link to={'/Address'}
                          style={{
                            textDecoration: "none",
                            color: "#641E16",
                            fontWeight: "500"
                          }}
                        >Checkout</Link> </button>
                      <p> &nbsp; &nbsp; &nbsp; &nbsp;OR</p>
                      <button type="button" class="btn btn-light">
                        <Link to={'/Home'}
                          style={{
                            textDecoration: "none",
                            color: "#641E16",
                            fontWeight: "500"
                          }}
                        >Continue Shopping</Link>  </button>

                    </td>
                  </tr>

                </tbody>
              </Table>
            </Col>

          </Row>



          
        </Container>
      </div>

    </div>
  )
}

export default Carts
