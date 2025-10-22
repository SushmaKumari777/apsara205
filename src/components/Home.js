import React, { useState, useEffect } from 'react'
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import pooh from '../images/pooh.webp'
import naina from '../images/naina.webp'
import geet from '../images/geet.webp'
import aisa from '../images/aisa.webp'
import halfstyle from '../images/half style.webp'
import desi from '../images/desi.webp'
import sanskari from '../images/sanskari.webp'
import all from '../images/allrounder.webp'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router'
// import Carousel from 'react-bootstrap/Carousel';
// import slide1 from '../images/desi.webp'
import video from '../images/menuvideo.mp4'
import Menu from './Menu'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../images/aisa.webp';
// import { FaBeer } from "react-icons/fa";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";
import axios from 'axios';



const Home = () => {

  const [womenProducts, setWomenProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/api/ssproducts/new/women').then((response) => {
      console.log(response.data)
      setWomenProducts(response.data)
    })
  }, []);


  useEffect(() => {
    axios.get('http://localhost:8090/api/ssproducts/new/men').then((response) => {
      console.log(response.data)
      setProducts(response.data)
    })
  }, []);


  return (
    <div>
      {/* -------------------------------------Menu section-------------------------------------------- */}
      <div className="video-section">
        <section>
          {/* <Container fluid> */}
            <Row>
              <Col>
                <video autoPlay loop muted className="background-video">
                  <source src={video} type="video/mp4" />
                </video>
                <Menu></Menu>
              </Col>
            </Row>
          {/* </Container> */}
        </section>
      </div>

      {/* ----------------------latest arrrival women and women section---------------------------------------- */}

      <div>
        <section className='latestw'>
          <Row>
            <h1>Latest Arrivals</h1>
    <div className="scroll-container">
    {
              womenProducts.map((product,index) => {
                return (
                  <Col md={3} >
                    <div className='square' key={index}>
                      <IoIosHeartEmpty className='wishlist' />
                      <img src={`http://localhost:8090/upload/${product.images[0]}`} />
                      <p>{product.productName}</p>
                      <h6>Rs.{product.productPrice}</h6>
                      <Button variant="outline-secondary" >Add to Cart</Button>
                    </div>
                  </Col>
                )
              }
              )
            }
    </div>
          </Row>
        </section>
        <section className='latestm'>
          <Row>
            <h1>Latest Arrivals</h1>
         <div className="scroll-container">
         {
              products.map((product,index) => {
                return (
                  <Col md={3} key={index}>
                  <div className="square" >
                  {/* <div className='square'> */}
                      <IoIosHeartEmpty className='wishlist' />
                      <img src={`http://localhost:8090/upload/${product.images[0]}`} />
                      <p>{product.productName}</p>
                      <h6>Rs.{product.productPrice}</h6>
                      <Button variant="outline-secondary">Add to cart</Button>
                    {/* </div> */}
                  </div>
                  </Col>
                )
              }
              )
            }
         </div>
          </Row>
        </section>

      </div>

      {/* ------------------------------Women and men collections------------------------------ */}
      <div>
        <section className='womencollections'>
          <Container>
            <Row>
              <Col>
                <h2>Women Collections</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3}>
                <div className='women-collection'>
                  <img src={pooh} alt='' />
                </div>
                <p>Sleve-less-kurti <FaCircleArrowRight /></p>

              </Col>
              <Col xs={6} md={3}>
                <div className='women-collection'>
                  <img src={naina} alt='' />
                </div>
                <p> FullSleeves kurti <FaCircleArrowRight /></p>

              </Col>
              <Col xs={6} md={3}>
                <div className='women-collection'>
                  <img src={geet} alt='' />
                </div>
                <p>Our Best Sellers <FaCircleArrowRight /></p>

              </Col>
              <Col xs={6} md={3}>
                <div className='women-collection'>
                  <img src={aisa} alt='' />
                </div>
                <p>New launches <FaCircleArrowRight /></p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='mencollections'>
          <Container>
            <Row>
              <Col>
                <h2>Men Collections</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3}>
                <div className='men-collection' >
                  <img src={halfstyle} alt='' />
                </div>
                <p>Half Shirts <FaCircleArrowRight /></p>
              </Col>

              <Col xs={6} md={3}>
                <div className='men-collection'>
                  <img src={desi} alt='' />
                </div>
                <p>Full Shirts <FaCircleArrowRight /></p>
              </Col>
              <Col xs={6} md={3}>
                <div className='men-collection'>
                  <img src={sanskari} alt='' />
                </div>
                <p>The Sanskari drips <FaCircleArrowRight /></p>
              </Col>
              <Col xs={6} md={3}>
                <div className='men-collection'>
                  <img src={all} alt='' />
                </div>
                <p>All Collections <FaCircleArrowRight /></p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      {/* <section className='slidearea'>
        <Container>
          <Row>
            <Col>
              <h1>हमारी नहीं हमारी अप्सराओ की सुनो</h1>
            </Col>

          </Row>
          <Row>
            <Col>

            </Col>
          </Row>
          <Carousel>
            <Carousel.Item>
              <img src={slide1} alt='' />
              <ExampleCarouselImage text="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section> */}

    </div>
  )
}

export default Home
