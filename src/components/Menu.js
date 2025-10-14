import React, { useState } from "react";
import "./menu.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { logout } from '../slices/auth';
import { useSelector } from "react-redux";
// import logo from '..logo1.png'
import logo from "../images/logo4.png";
// import logo from 'public/images/logo.png'
import { RiHome2Line } from "react-icons/ri";

import { useDispatch } from 'react-redux';
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Menu = () => {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
  const handleLogout = () => {
    dispatch(logout());
    // navigate('/login'); // Redirect to login page
    window.location.reload();
  };
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div></div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home" className="brand">
            <img src={logo} alt="" />
          </Navbar.Brand>
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/home"><RiHome2Line /> Home</Link>
              </Nav.Link>
              {/* <Nav.Link><Link to="/jsr">JSR</Link></Nav.Link> */}
              {/* <Nav.Link><Link to="/example">New</Link></Nav.Link> */}
              {/* <Nav.Link><Link to="/cart">Cart</Link></Nav.Link> */}
              <NavDropdown title="Women" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/category/pooh">Pooh</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/naina">Naina</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/geet">geet</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/aisha">Aisha</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/gender/women">All Women</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Men" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/category/halfStyle">Half Style Street Look</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/desiformal">Desi Formals</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/Sanskari">Sanskari Drips</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/allRounder">All Rounder</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/gender/men">All Men</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/contact">Contact us</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="wishlist">Wishlist</Link>
              </Nav.Link> */}
              {/* <Nav.Link><Link to="Our story">Our story</Link></Nav.Link> */}
            </Nav>
            <Nav className="ms-auto icons-nav">
              <Nav.Link >
                <div style={{ position: "relative", width: "250px" }}>
                  {/* <FaSearch */}
                  <CiSearch
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "gray",
                      fontSize: "18px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Search for Products....."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "5px 5px 5px 35px",
                      borderRadius: "5px",
                      border: "1px solid #F0F5FF",
                      backgroundColor: "#F0F5FF",
                      outline: "none",
                      fontSize: "15px",
                    }}
                  />
                </div>
              </Nav.Link>


              {
                currentUser && currentUser.id !== "" ?
                  <Nav.Link as={Link} to="/account">
                    <FontAwesomeIcon icon={faUser} />
                  </Nav.Link>
                  : <Nav.Link as={Link} to="/login">
                    <FontAwesomeIcon icon={faUser} />
                  </Nav.Link>
              }
              {/* <Nav.Link><FontAwesomeIcon icon={faHeart} /></Nav.Link> */}
              <Nav.Link as={Link} to="/wishlist">
                <FontAwesomeIcon icon={faHeartRegular} />
              </Nav.Link>
              <Nav.Link as={Link} to="/carts"> 
                <FontAwesomeIcon icon={faCartShopping} />
              </Nav.Link>

              {
                currentUser && currentUser.id !== "" ?
                  <Nav.Link onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOut} />
                  </Nav.Link> : ""
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
