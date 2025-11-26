import React, { useEffect, useState } from "react";
import "./menu.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { Container } from "react-bootstrap";
import { logout } from '../slices/auth';
import { useSelector } from "react-redux";
import logo from "../images/logo4.png";
import { RiHome2Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import { BsBoxSeam } from "react-icons/bs";



const Menu = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [noCartItems, setNoCartItems] = useState();
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);

  useEffect(() => {


    // axios.get(`http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
    //   console.log(response.data.items)
    //   console.log(response.data)
    //   // setProducts(response.data.items)
    //   setNoCartItems(response.data.itemCount)
    // })
  }, []);


  const handleLogout = () => {
    dispatch(logout());
    // navigate('/login'); // Redirect to login page
    window.location.reload();
  };


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
                  <Link to="/category/68e79d180418ea89753732b0">Pooh</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/68e79d200418ea89753732bb">Naina</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/68e79d280418ea89753732c5">geet</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/68e79d4e0418ea89753732d2">Aisha</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/gender/women">All Women</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Men" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/category/68e7b531b6bd3f4009b1e96d">Half Style Street Look</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/68e7b542b6bd3f4009b1e974">Desi Formals</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/68e7b557b6bd3f4009b1e97b">Sanskari Drips</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/68e7b566b6bd3f4009b1e982">All Rounder</Link>
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
                <div className="search-box" style={{ position: "relative", width: "480px" }}>
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
              <Nav.Link as={Link} to="/register">
                Sign up
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
              <Nav.Link as={Link} to="/wishlist">
                <FontAwesomeIcon icon={faHeartRegular} />
              </Nav.Link>
              <Nav.Link as={Link} to="/customerOrder">
                <BsBoxSeam />
              </Nav.Link>
              <Nav.Link as={Link} to="/carts" className="cart-container">
                <FontAwesomeIcon icon={faCartShopping} />
                {noCartItems > 0 && <span className="cart-badge">{noCartItems}</span>}
              </Nav.Link>
              {
                currentUser && currentUser.id !== "" ?
                  <Nav.Link onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOut} />
                  </Nav.Link> 
                  
                  : ""
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
