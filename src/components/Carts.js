
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
                              {product.quantity}

                            </td>
                            <td className='text-center'>
                              {product.quantity*product.productDetails.productPrice}
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
                <tbody>
                  <tr>
                    <td>Subtotal :</td>
                    <td>
                    {/* {product.quantity*product.productDetails.productPrice} */}
                    </td>
                  </tr>
                  <tr>
                    <td> Coupon code:</td>
                    <td> Add Coupon</td>
                  </tr>
                  <tr>
                    <td> Discount:</td>
                    <td> $500</td>
                  </tr>
                  <tr>
                    <td> Grand Total:</td>
                    <td> $1299</td>
                  </tr>
                  <tr>
                    <td>
                      < button type="button" class="btn btn-light"
                    // style={{
                    //   color:"white",
                    //   backgroundColor: "#641E16",
                    //   borderColor: "#641E16",
                      
                    //   padding: "5px 20px",
                    // }}
                      >
                      <Link to={'/Address'} >Proceed to Checkout</Link>
                      </button>
                      <p>OR</p>
                      {/* <Button variant="outline-secondary"> */}
                      <button type="button" class="btn btn-light">
                      <Link to={'/Home'} >Continue Shopping</Link> 
                      </button>
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
