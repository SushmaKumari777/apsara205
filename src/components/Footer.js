import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram, FaSquareFacebook, FaSquareYoutube } from "react-icons/fa6";

import { Link } from "react-router";



const Footer = () => {
  return (
    <div>
      <footer className='footerarea'>


        <Container fluid>
          <section>
            <Row>
              <Col>
                <div >
                  <h5 style={{color:"#641E16"}} >Women</h5>
                  <ul className="space-y-2 text-sm">
                    <li>   <Link to="/category/68e79d180418ea89753732b0" style={{color:"#641E16"}}>Pooh</Link></li>
                    <li>   <Link to="/category/68e79d180418ea89753732b0" style={{color:"#641E16"}}>Naina</Link></li>
                    <li>   <Link to="/category/68e79d180418ea89753732b0" style={{color:"#641E16"}}>Geet</Link></li>
                    <li>   <Link to="/category/68e79d180418ea89753732b0" style={{color:"#641E16"}}>Aisha</Link></li>
                    <li>   <Link to="/category/68e79d180418ea89753732b0" style={{color:"#641E16"}}> All women</Link></li>
                  </ul>
                </div>


              </Col>
              <Col>
                <div>
                  <h5 style={{color:"#641E16"}}> Men</h5>
                  <ul className="space-y-2 text-sm">
                    <li>    <Link to="/category/68e79d180418ea89753732b0" style={{color:"#641E16"}}>street look</Link></li>
                    <li>   <Link to="/category/68e79d180418ea89753732b0" style={{color:"#641E16"}}>Desi formals</Link></li>
                    <li>   <Link to="/category/68e79d180418ea89753732b0" style={{color:"#641E16"}}>Sanskari Drips</Link></li>
                    <li>   <Link to="/category/68e79d180418ea89753732b0" style={{color:"#641E16"}}>All rounder</Link></li>
                    <li>   <Link to="/category/68e79d180418ea89753732b0" style={{color:"#641E16"}}>All men</Link></li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div style={{color:"#641E16"}}>
                  <h5>Customer Service</h5>
                  <ul >
                    <li>Return & Refund Policy</li>
                    <li>Shipping Policy</li>
                    <li>Size Guide</li>
                    <li>Track Order</li>
                    <li>FAQs</li>
                  </ul>
                </div>

              </Col>
              <Col md={3} style={{color:"#641E16"}}>

                <h5>About</h5>
                <ul>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Our Story</li>
                  <li>Sustainability</li>
                </ul>



              </Col>
              <Col></Col>
              <Row>
                <Col>
                  <p>
                    <div className='text-center' style={{color:"#641E16"}}>
                      <Row>
                        <Col>
                          <p>
                            Follow Us:   
                            <FaWhatsapp 
                                style={{
                                  color: "green",
                                  fontSize: "20px",
                                  margin: "0 8px",
                                  cursor: "pointer",
                                }}/>
                            <FaInstagram  style={{
                            color: " linear-gradient(90deg, #ff0000, #007bff, #ffeb3b);",
                            fontSize: "20px",
                            margin: "0 8px",
                            cursor: "pointer",
                          }} />  
                           <FaSquareFacebook 
                           style={{
                            color: "#1877F2",
                            fontSize: "20px",
                            margin: "0 8px",
                            cursor: "pointer",
                          }}/> 
                             <FaSquareYoutube 
                                style={{
                                  color: "#FF0000",
                                  fontSize: "20px",
                                  margin: "0 8px",
                                  cursor: "pointer",
                                }}/>
                               
                                </p>
                        </Col>

                      </Row>
                    </div>
                    <div className='text-center'>
                    Instagram | Facebook | YouTube
                    ©️ 2025 YourBrand. Fashion for Everyone.
                    </div>
                 
                  </p>
                </Col>
              </Row>
            </Row>
          </section>
        </Container>


      </footer >
    </div >
  )
}

export default Footer
