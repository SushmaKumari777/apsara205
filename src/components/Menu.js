import React from 'react'
import './menu.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";



const Menu = () => {
    return (
        <div>
            <section className='navbar'>
                <Container>
                    <Row>
                        <Col>
                            <Navbar expand="lg">
                                <Navbar.Brand href="#home" className='brand'><b> Apsara</b></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home"><Link to="/home"><b>Home</b></Link></Nav.Link>
                                        <Nav.Link><Link to="/jsr">JSR</Link></Nav.Link>
                                        <Nav.Link><Link to="/example">New</Link></Nav.Link>
                                        <Nav.Link><Link to="/cart">Cart</Link></Nav.Link>
                                        <NavDropdown title="Women" id="basic-nav-dropdown">
                                            <NavDropdown.Item ><Link to="/category/pooh">Pooh</Link></NavDropdown.Item>
                                            <NavDropdown.Item ><Link to="/category/naina">Naina</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link to="/category/geet">geet</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link to="/gender/women">All Women</Link></NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Men" id="basic-nav-dropdown">
                                            <NavDropdown.Item ><Link to="/category/halfStyle">Half Style Street Look</Link></NavDropdown.Item>
                                            <NavDropdown.Item ><Link to="/category/desiformal">Desi Formal</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link to="/category/Sanskari">Sanskari</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link to="/gender/men">All Men</Link></NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link><Link to="contactUs">Contact us</Link></Nav.Link>
                                    </Nav>
                                    <Nav className="ms-auto icons-nav">
                                        <Nav.Link><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                                        <Nav.Link><FontAwesomeIcon icon={faUser} /></Nav.Link>
                                        {/* <Nav.Link><FontAwesomeIcon icon={faHeart} /></Nav.Link> */}
                                        <Nav.Link><FontAwesomeIcon icon={faHeartRegular} /></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Menu