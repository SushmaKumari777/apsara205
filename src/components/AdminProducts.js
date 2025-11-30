
import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { clearMessage } from "../slices/message";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router'
import Menu from "./Menu";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const AdminProducts = () => {
    const navigate = useNavigate();

    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)

    useEffect(() => {
        if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
            console.log(currentUser.roles[0]);
            navigate("/")
        }
    }, [currentUser, navigate]);

    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);
    useEffect(() => {
        axios.get('http://localhost:8090/api/ssproducts').then((response) => {
            console.log(response.data)
            setProducts(response.data)
        })
    }, []);



    if (isLoggedIn) {
        // return <Navigate to="/home" />;
    }
    const handleDelete = (id) => {
        if (window.confirm("Are you sure")) {
            axios.delete(`http://localhost:8090/api/ssproducts/${id}`).then((response) => {
                console.log('Product successfully deleted')
                alert('Product successfully deleted')
                window.location.reload();
            })
        }
    }
    return (
        <div>
            <Row>
                <Col><Menu></Menu></Col>
            </Row>
           
            <Container fluid className='login'>
            <Row>
            <Col style={{ color: "#641E16", }}>
                    <Breadcrumb>
                        {/* <Breadcrumb.Item href="#">All products</Breadcrumb.Item> */}
                        <Breadcrumb.Item href="adminDashboard"> Admin Dashboard </Breadcrumb.Item>

                    </Breadcrumb>
                </Col>
            </Row>
                <Row>
               
                    <Col>
                        <h2 className='text-center' style={{ color: "#641E16" }} >All Products</h2>
                    </Col>
                    {/* <Col className='addnew'>
                        <Button><Link to={'/AddProduct'} >Add new product</Link><IoIosArrowRoundForward /></Button>
                    </Col> */}
                    
                </Row>
                {message && (
                    <Row>
                        <Col>
                            <div className="alert alert-danger text-center">{message}</div>
                        </Col>
                    </Row>
                )}
            </Container >
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className='text-center' style={{ backgroundColor: "#641E16", color: "white" }}>S.No.</th>
                                    <th className='text-center' style={{ backgroundColor: "#641E16", color: "white" }}>Product name</th>
                                    <th className='text-center' style={{ backgroundColor: "#641E16", color: "white" }}>Images</th>
                                    <th className='text-center' style={{ backgroundColor: "#641E16", color: "white" }}>Product price</th>
                                    <th className='text-center' style={{ backgroundColor: "#641E16", color: "white" }}>Delete</th>
                                    <th className='text-center' style={{ backgroundColor: "#641E16", color: "white" }}>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products ?
                                        products.map((product, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='text-center' data-label="S No. : " style={{ color: "#641E16" }}>{index + 1}</td>
                                                    <td data-label="Product: " style={{ color: "#641E16" }}>{product.productName}</td>
                                                    <td className='text-center'>
                                                        <img src={`http://localhost:8090/upload/${product.images[0]}`}
                                                            style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                                                        />
                                                    </td>
                                                    <td className='text-center' data-label="Price : " style={{ color: "#641E16" }}>  ₹ {product.productPrice}</td>
                                                    <td className='text-center'>
                                                        <button onClick={() => handleDelete(product.id)}> <MdDelete style={{ color: "#641E16" }} /></button>
                                                    </td>
                                                    <td className='text-center'><MdModeEdit style={{ color: "#641E16" }} />
                                                    </td>

                                                </tr>
                                            )
                                        }
                                        )
                                        : <tr>
                                            <td colSpan={4}>no data available</td>
                                        </tr>
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        </div >
    );
};

export default AdminProducts
