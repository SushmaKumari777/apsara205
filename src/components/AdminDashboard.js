import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router'
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; import { FaArrowCircleLeft } from "react-icons/fa";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { Chart } from "react-google-charts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [12000, 19000, 3000, 5000, 2000],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1
    }
  ]
};


const options = [
  { value: 'admin', label: 'Admin' },
  { value: 'user', label: 'User' },
];










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
            <Col>
              {/* <Link to={'/Home'} >

                <FaArrowCircleLeft
                  style={{
                    color: "#641E16",
                    fontSize: "25px",
                    margin: "5px"
                  }}
                />

              </Link> */}
              <Breadcrumb>
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
              </Breadcrumb>

            </Col>
          </Row>
          <Row>
            <Col md={2} className='sidebar'>
              <ul>
                {/* <li><Link to={'/AdminDashboard'} ><p>Dashboard</p></Link><p></p></li> */}
                <li><Link to={'/AddCategory'} ><p>Add Category</p></Link></li>
                <li><Link to={'/AddProduct'} ><p>Add Product</p></Link></li>
                <li><Link to={'/AdminProduct'} ><p>AdminProduct</p></Link></li>
                <li><Link to={'/AdminOrders'} ><p>Admin Orders</p></Link></li>
                <li><Link to={'/Addproduct'} ><p>Add product</p></Link></li>
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
                        {/* <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                      /> */}
                      </div>
                    </Col>
                    <Col>
                      <Bar options={options} data={data} />;
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
