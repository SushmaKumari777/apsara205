
import React, { useState, useEffect } from 'react'
import Menu from "./Menu";
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from "../slices/message";
import axios from 'axios';
import { CiSquareRemove } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router'

const Carts = () => {

  // const dispatch = useDispatch();
  const [products, setProducts] = useState();
  const [count, setCount] = useState(1);
  const [noCartItems, setNoCartItems] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
      console.log(response.data.items)
      console.log(response.data)
      setProducts(response.data.items)
      setNoCartItems(response.data.itemCount)
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

  return (
    <div>
      <div>
        <Row>
          <Col>
            <Menu></Menu>
          </Col>
        </Row>
      </div>
      <div className="bg">

        <Container>
          <Row>
            <Col>
              <h1 className='text-center'>
                Your Cart ({noCartItems})
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table Striped rows hover>
                <thead>
                  <tr>
                    <th className='text-center'>S.No.</th>
                    <th className='text-center'>Products</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>Images</th>
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
                          <tr key={index}>
                            <td className='text-center'>{index + 1}</td>
                            <td>{product.productDetails.productName}
                            </td>
                            <td className='text-center'>{product.productDetails.productPrice}</td>
                            <td className='text-center'>
                              <img src={`http://localhost:8090/upload/${product.productDetails.images[0]}`}
                                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                              />
                            </td>
                            {/* <td className='text-center'>{product.Quantity}</td> */}

                            <td className='text-center'>
                              {/* <button onClick={decrement}>-</button>
                              <button>{count}</button>
                              <button onClick={increment}>+</button> */}
                              <button onClick={() => quantityUpdate(product.productId, product.quantity - 1)}>-</button>
                              {product.quantity}
                              <button onClick={() => quantityUpdate(product.productId, product.quantity + 1)}>+</button>


                            </td>
                            <td className='text-center'>
                              {product.quantity * product.productDetails.productPrice}
                            </td>

                            <td className='text-center'>
                              <button onClick={() => handleDelete(product.productId)}><MdDelete /> </button>
                            </td>


                          </tr>

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
            <Col>Coupon code</Col>
            <Col>
              <Table>
                <tbody 
                 style={{
                  color: "#641E16"
                }}
                >
                  <tr>
                    <td>Subtotal :</td>
                    <td>
                      <p> ₹{subTotal.toFixed(2)}</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td> Discount:</td>
                    <td><p> ₹{discountValue.toFixed(2)}</p>
                    </td>
                  </tr>
                  <tr>
                    <td> Grand Total:</td>
                    <td><p>₹{grandTotal.toFixed(2)}</p></td>
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
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;OR</p>
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
