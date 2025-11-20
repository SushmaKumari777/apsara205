import React, { useState } from "react";
import { Row, Col, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router'
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; import { FaArrowCircleLeft } from "react-icons/fa";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Doughnut } from "react-chartjs-2";
import Dropdown from 'react-bootstrap/Dropdown';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
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
      label: "Order statistics",
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





ChartJS.register(ArcElement, Tooltip, Legend, Title);
const datas = {
  labels: ["Handicrafts", "Tourism", "Agriculture", "Education", "Health"],
  datasets: [
    {
      label: "Tribal Development",
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(153, 102, 255, 0.7)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

const option = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Visitors Report",
      font: {
        size: 18,
        weight: "bold",
      },
      color: "#333",
    },
    legend: {
      position: "bottom",
      labels: {
        font: {
          size: 14,
        },
        color: "#444",
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.parsed}%`;
        },
      },
    },
  },
};




const Dataset = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'Top selling categories',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

// const hours = [
//   "08:00", "09:00", "10:00", "11:00",
//   "12:00", "13:00", "14:00", "15:00",
//   "16:00", "17:00"
// ];

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// const weeks = [
//   "Week 1 (1–7)",
//   "Week 2 (8–14)",
//   "Week 3 (15–21)",
//   "Week 4 (22–28)"
// ];


const AdminDashboard = (props) => {
  // const [selectedWeek, setSelectedWeek] = useState(weeks[0]);


  return (
    <div style={{backgroundColor:"#EAEAEA"}}>
      <Row>
        <Col>
          <Menu></Menu>
        </Col>
      </Row>
      <section className='dashboard'>
        <Container fluid>
          <Row>
            <Col md={10}>
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

            <Col md={2}>
            
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary"id="dropdown-basic" style={{}}>
                      Calender
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Last 45 days</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Last 90 days</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Last 6 months</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
          
          </Row>
          <Row>
           
            <Col md={2}>
            <Table Striped rows hover>
             <tbody>
             <tr>
                <td>
                <Link to={'/AddCategory'} style={{textDecoration: "none", color: "#641E16", fontWeight: "20px"  }}>Add Category</Link>
                </td>
              </tr>
              <tr>
                <td>
                <Link to={'/AddProduct'} style={{textDecoration: "none",color: "#641E16",  fontWeight: "20px" }}>Add Product</Link>
                </td>
              </tr>
              <tr>
                <td>
                <Link to={'/AdminProduct'} style={{textDecoration: "none",color: "#641E16",  fontWeight: "20px" }}>Admin Product</Link>
                </td>
              </tr>
              <tr>
                <td>
                <Link to={'/AdminOrders'} style={{textDecoration: "none",color: "#641E16",  fontWeight: "20px" }}>Admin Orders</Link>
                </td>
              </tr>
              <tr>
                <td>
                  Setting
                </td>
              </tr>
              <tr>
                <td>Help Cente</td>
              </tr>
              <tr>
                <td>
                <FontAwesomeIcon icon={faSignOut} />Logout
                </td>
              </tr>
             </tbody>
            
            </Table>
            </Col>
            <Col md={10}>

              <Row>
                <Col>
                  <div className='sales' style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                    <p>Total Sales</p>
                    <h6>	₹ 110,019</h6>
                  </div>
                </Col>
                <Col>
                  <div className='order'>
                    <p>Total Orders</p>
                    <h6>	₹ 110,019</h6>
                  </div>
                </Col>
                <Col>
                  <div className='profit'>
                    <p>Total Profit</p>
                    <h6>	₹ 110,019</h6>
                  </div>
                </Col>
                <Col>
                  <div className='customer'>
                    <p>New Customers</p>
                    <h6>	₹ 110,019</h6>
                  </div>
                </Col>
              </Row>
              <Row>
              
                <Col md={6} style={{
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  marginTop: "10px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                }}>
                  <Pie
                    options={option}
                    data={data}
                    {...props}
                  />
                </Col>
                <Col style={{
                  backgroundColor: "#f9f9f9",
                  padding: "10px",
                  marginTop: "10px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "350px",
                  width:"500px"
                }}>
                  
                  <Bar options={options} data={data}></Bar>
                </Col>
              </Row>

              <Row>
              <Col>
                  <div style={{
                    width: "300px",
                    height: "350px",
                    backgroundColor: "#f9f9f9",
                    padding: "20px",
                    marginTop: "10px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
                  }}>
                    Top selling categories
                    <Doughnut data={Dataset} />
                  </div>
                </Col>
             
              </Row>
              <Row>
                <Col style={{marginTop:"10px"}}>
               <div style={{backgroundColor:"white",borderRadius:"10px"}} >
                <h4 style={{margin:"10px"}}>Recent Orders</h4>
                <hr></hr>
               <Table Striped rows hover >
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Order Id</th>
                      <th>Date</th>
                      <th>Customer Name</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Full-Sleeves</td>
                      <td>45893</td>
                      <td>Nov15th,2025</td>
                      <td>Sushma Kumari</td>
                      <td>Delivered</td>
                      <td>₹ 2000</td>
                    </tr>
                  </tbody>
                </Table>
               </div>
                </Col>
              </Row>

            </Col>

          </Row>
        </Container>

      </section>
    
    </div>
  )
}

export default AdminDashboard
