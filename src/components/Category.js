import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Link, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
// import './categories.css'
import '../App.css'
import Menu from './Menu'
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";




const Category = () => {
  const { categoryName } = useParams();
  console.log(categoryName)

  useEffect(() => {
    axios.get(`http://localhost:8090/api/ssproducts/category/${categoryName}`).then((response) => {
      console.log(response.data)
      setProducts(response.data)
    })
  }, []);

  const [products, setProducts] = useState();

  const AddCart = (product) => {
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
      window.location.reload();
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
            {/* <Col>
              <div className="pooh-image">
                <img src="pooh.webp" alt="" />
              </div>
            </Col> */}
          </Row>
          <Row>
       {/* <div className="gap-container" > */}
       {
              products ?
                // products.filter((category) => category.category === categoryName).map((product) => {

                products.map((product, index) => {
                  return (
                    <Col md={3} key={index} >
                      <div className='box'>
                        {/* <Link to={'/buy/' + pooh.title + pooh.price1}> */}
                        <IoIosHeartEmpty className='wishlist' />
                        <img src={`http://localhost:8090/upload/${product.images[0]}`} />
                        <p>{product.productName}</p>{ }
                        <h6>Rs.{product.productPrice}</h6>
                        <Button variant="outline-secondary" className="button" onClick={() => AddCart(product)}>Add to Cart</Button>
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
       {/* </div> */}
          </Row>
     
      </section>
    </div>
  )
}

export default Category