import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router'
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; import { FaArrowCircleLeft } from "react-icons/fa";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";


import { Chart } from "react-google-charts";






const data = [
  ["x", "dogs"],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
  [8, 33],
  [9, 40],
  [10, 32],
  [11, 35],
];

const options = {
  title: "SALES PERFORMENCE",
  hAxis: { title: "Time" },
  vAxis: { title: "Popularity" },
  legend: "none",
};


const AdminDashboard = () => {
  return (
    <div>
      {/* <Row>
        <Col>
          <Menu></Menu>
        </Col>
      </Row> */}
      <section className='dashboard'>
        <Container fluid>
          <Row>
            <Col>
              <Link to={'/Home'} >

                <FaArrowCircleLeft
                  style={{
                    color: "#641E16",
                    fontSize: "25px",
                    margin: "5px"
                  }}
                />

              </Link>

            </Col>
          </Row>
          <Row>
            <Col md={2} className='sidebar'>
              <ul>
                <li><Link to={'/AdminDashboard'} ><p>Dashboard</p></Link><p></p></li>
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
                  <div className='sales'>
                    <p>Total Sales</p>
                    <h6>$110,019</h6>
                  </div>
                </Col>
                <Col>
                  <div className='order'>
                    <p>Total Orders</p>
                    <h6>$110,019</h6>
                  </div>
                </Col>
                <Col>
                  <div className='profit'>
                    <p>Total Profit</p>
                    <h6>$110,019</h6>
                  </div>
                </Col>
                <Col>
                  <div className='customer'>
                    <p>New Customers</p>
                    <h6>$110,019</h6>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  
                  <Row>
                    <Col>
                    <div className='saleschart'>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                      />
                    </div>
                    </Col>
                    <Col>
                    
                    </Col>
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
