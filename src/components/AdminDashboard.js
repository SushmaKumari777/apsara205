import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router'
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
const AdminDashboard = () => {
  return (
    <div>
      <Row>
        <Col>
          <Menu></Menu>
        </Col>
      </Row>
      <section className='dashboard'>
        <Container fluid>
          <Row>
            <Col md={2} className='sidebar'>
              <ul>
                <li><p>Dashboard</p></li>
                <li><Link to={'/AddCategory'} ><p>Add Category</p></Link></li>
                <li><Link to={'/AddProduct'} ><p>Add Product</p></Link></li>
                <li><Link to={'/AdminProduct'} ><p>AdminProduct</p></Link></li>
                <li><Link to={'/AdminOrders'} ><p>Admin Orders</p></Link></li>
                <li>Setting</li>
                <li>Help Center</li>
                <li><FontAwesomeIcon icon={faSignOut} />Logout</li>
              </ul>
            </Col>
            <Col md={10}>
              <Row>
                <Col md={6}>
                  <h5>Dashboard</h5>
                </Col>
                <Col md={6}>Calender</Col>
              </Row>
              <Row>
                <Col>
                  <div className='front'>
                    <p>Total Sales</p>
                    <h6>$110,019</h6>
                  </div>
                </Col>
                <Col>
                  <div className='front'>
                    <p>Total Orders</p>
                    <h6>$110,019</h6>
                  </div>
                </Col>
                <Col>
                  <div className='front'>
                    <p>Total Profit</p>
                    <h6>$110,019</h6>
                  </div>
                </Col>
                <Col>
                  <div className='front'>
                    <p>New Customers</p>
                    <h6>$110,019</h6>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col>SALES PERFORMANCE</Col>
                    <Col>Calender Weekly</Col>
                  </Row>
                </Col>
                <Row>
                  <Col>
                  
                  
                  
                  
                  </Col>

                </Row>
              </Row>
            </Col>

          </Row>
        </Container>

      </section>
      <section className='main'>

      </section>
    </div>
  )
}

export default AdminDashboard
