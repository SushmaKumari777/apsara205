import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Link, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import Menu from './Menu'
import axios from 'axios';
import '../App.css'
// import "./gender.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";

// import { useSelector } from "react-redux";


const Gender = () => {
  const { idealFor } = useParams();
  console.log(idealFor)

  // const [products, setProducts] = useState();
//  const [womenProducts, setWomenProducts] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8090/api/ssproducts/new/${idealFor}`).then((response) => {
      console.log(response.data)
      setProducts(response.data)
    })
  
  }, [idealFor]);




  const AddCart = (product) => {
    // console.log(pooh)
    const data = {
      "userId": currentUser.id,
      "items": [
        {
          "productId": product.id,
          "quantity": 1,
          "price": product.productPrice
        }
      ]

    }
    console.log(data)
    try {
      const res = axios.post("http://localhost:8090/api/carts", data);
      console.log("product add to cart:", res.data);
      alert("product add to cart successfully!");

    } catch (err) {
      console.error(" Failed add to cart", err);
      alert("Failed add to cart");
    }
  }
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser)

  return (
    <div>
      <section>
        <Row>
          <Col>
            <Menu></Menu>
          </Col>
        </Row>
      </section>
      <section>
        <Container>
          <Row>
            {
              products ?
              products.map((product, index) => {
                  return (
                    <Col xs={6} md={3} >
                      <div className='square'>
                        {/* <Link to={'/buy/' + pooh.title + pooh.price1}> */}
                        <IoIosHeartEmpty className='wishlist' />
                        <img src={`http://localhost:8090/upload/${product.images[0]}`} />
                        <p>{product.productName}</p>{ }
                        <h6>Rs.{product.productPrice}</h6>
                        <Button className="button" onClick={() => AddCart(product)}>Add to Cart</Button>
                        {/* </Link> */}
                      </div>
                    </Col>
                  )
                }
                )
                : <div>
                  no data available
                </div>
            }
          </Row>
        
        </Container>
      </section>
    </div>
  )
}

export default Gender