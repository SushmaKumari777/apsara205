import React from 'react'
import { Col, Container, Row, } from 'react-bootstrap'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, } from 'react-router';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import{Fontawesome} from'react-bootstrap'
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag } from '@fortawesome/free-solid-svg-icons';
import video from '../images/menuvideo.mp4'

const Header = () => {
    return (
        <div>
            <header className='toparea' >

                <Row>
                    <Col>

                        <marquee direction="left" scrollamount="10">
                            <p><FontAwesomeIcon icon={faTag} /><b> Grab 10% OFF on your first order. &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <FontAwesomeIcon icon={faTag} /> Grab 10% off
                                on your first order.  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <FontAwesomeIcon icon={faTag} /> Grab 10% OFF
                                on your first order. &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <FontAwesomeIcon icon={faTag} /> Grab 10% OFF
                                on your first order. &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <FontAwesomeIcon icon={faTag} /> Grab 10% OFF
                                on your first order. &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <FontAwesomeIcon icon={faTag} /> Grab 10% OFF
                                on your first order.</b></p>
                        </marquee>

                    </Col>
                </Row>


            </header>     
            <section>
                <Row>
                    <Col>
                   
                    </Col>
                </Row>
                </section>    
        </div>
    )
}

export default Header
