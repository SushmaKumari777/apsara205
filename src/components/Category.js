import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Link, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import './categories.css'
import Menu from './Menu'
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { IoIosHeartEmpty } from "react-icons/io";
const Category = () => {
  const { categoryName } = useParams();
  console.log(categoryName)


  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get(`http://localhost:8090/api/ssproducts/category/${categoryName}`).then((response) => {
      console.log(response.data)
      setProducts(response.data)
    })
  }, []);



  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <Menu></Menu>
            </Col>
            <Col>
              <div className="pooh-image">
                <img src="pooh.webp" alt="" />
              </div>
            </Col>
          </Row>
          <Row>
            {
              products ?
              // products.filter((category) => category.category === categoryName).map((product) => {

                products.map((product, index) => {
                  return (
                    <Col xs={6} md={3} >
                      <div className='square'>
                        {/* <Link to={'/buy/' + pooh.title + pooh.price1}> */}
                        <IoIosHeartEmpty className='wishlist' />
                        <img src={`http://localhost:8090/upload/${product.images[0]}`} />
                        <p>{product.productName}</p>{ }
                        <h6>Rs.{product.productPrice}</h6>
                        <Button>Add to Cart</Button>
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

export default Category