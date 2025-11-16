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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  dots: true,
  nextArrow: <MdKeyboardArrowRight />,
  prevArrow: <MdKeyboardArrowLeft />

};

const setting = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
  // dots: true,
  // nextArrow: <MdKeyboardArrowRight />,
  // prevArrow: <MdKeyboardArrowLeft />

};

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
          {/* <Row> */}
          {/* <Col> */}
          <Row>
            <h1>Latest Arrivals</h1>


            <Slider {...settings}>
              {
                womenProducts.map((product, index) => {
                  return (
                    <Col xs={6} md={3}>
                      {/* <div className="scroll-container"> */}
                      <div className='square' key={index}>
                        <Link to={`/products/${product.id}`}>
                          <IoIosHeartEmpty className='wishlist' />
                          <img src={`http://localhost:8090/upload/${product.images[0]}`} />
                          <p>{product.productName}</p>
                          <h6>Rs.{product.productPrice}</h6>
                          <Button variant="outline-secondary" className="button" onClick={() => AddCart(product)}>Add to Cart</Button>
                        </Link>
                      </div>

                      {/* </div> */}

                    </Col>

                  )
                }
                )
              }

            </Slider>



          </Row>
          {/* </Col> */}



          {/* </Row> */}
        </section>
        <section className='latestm'>
          <Row>
            <h1>Latest Arrivals</h1>
            {/* <div className="scroll-container"> */}
            <Slider {...settings}>
              {
                products.map((product, index) => {
                  return (
                    <Col md={3} key={index}>
                      <div className="square" >
                        <Link to={`/products/${product.id}`}>
                          {/* <div className='square'> */}
                          <IoIosHeartEmpty className='wishlist' />
                          <img src={`http://localhost:8090/upload/${product.images[0]}`} />
                          <p>{product.productName}</p>
                          <h6>Rs.{product.productPrice}</h6>
                          <Button variant="outline-secondary" className="button" onClick={() => AddCart(product)}>Add to cart</Button>
                          {/* </div> */}
                        </Link>
                      </div>
                    </Col>
                  )
                }
                )
              }
              {/* </div> */}
            </Slider>
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
                  <Link to="/category/68e79d200418ea89753732bb">
                    <img src={pooh} alt='' />
                  </Link>

                </div>
                <p>Sleve-less-kurti <FaCircleArrowRight /></p>

              </Col>
              <Col xs={6} md={3}>
                <div className='women-collection'>
                  <Link to="/category/68e79d180418ea89753732b0">
                    <img src={naina} alt='' />
                  </Link>

                </div>
                <p> FullSleeves kurti <FaCircleArrowRight /></p>

              </Col>
              <Col xs={6} md={3}>
                <div className='women-collection'>
                  <Link to="/category/68e79d4e0418ea89753732d2">
                    <img src={geet} alt='' />
                  </Link>

                </div>
                <p>Our Best Sellers <FaCircleArrowRight /></p>

              </Col>
              <Col xs={6} md={3}>
                <div className='women-collection'>
                  <Link to="">
                    <img src={aisa} alt='' />
                  </Link>
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
                  <Link to={'/Allproducts'} >
                    <img src={all} alt='' />
                  </Link>
                </div>

                <p>All Collections <FaCircleArrowRight /></p>

              </Col>
            </Row>
          </Container>
        </section>
      </div>




      <div  style={{ padding: "0 50px" }}>
       
      {/* <Slider {...setting}>
        
      <div style={{ padding: "0 50px" }}>
       <img src='desi.webp'style={{width:"200px",height:"200px"}}/>
      </div>
      <div>
      <img src='desi.webp' style={{width:"200px",height:"200px"}} />
      </div>
      <div>
      <img src='desi.webp' style={{width:"200px",height:"200px"}}/>
      </div>
      <div>
      <img src='desi.webp' style={{width:"200px",height:"200px"}}/>

      </div>
      <div>
      <img src='desi.webp' style={{width:"200px",height:"200px"}}/>

      </div>
      <div>
      <img src='desi.webp' style={{width:"200px",height:"200px"}}/>

      </div>
      <MdKeyboardArrowLeft /> <MdKeyboardArrowRight />
    </Slider> */}


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

    </div >
  )
}
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default Home
