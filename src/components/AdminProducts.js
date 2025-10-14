
import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './AdminProducts.css'
import { clearMessage } from "../slices/message";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router'


const AdminProducts = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
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
            <Container className='login'>
                <Row>
                    <Col md={3}>
                        <h1 >Products</h1>
                    </Col>
                    <Col md={9} className='addnew'>
                        <Button><Link to={'/AddProduct'} >Add new product</Link><IoIosArrowRoundForward /></Button>
                    </Col>
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
                                    <th className='text-center'>S.No.</th>
                                    <th className='text-center'>Product name</th>
                                    <th className='text-center'>Product price</th>
                                    <th className='text-center'>Delete</th>
                                    <th className='text-center'>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products ?
                                        products.map((product, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='text-center'>{index + 1}</td>
                                                    <td>{product.productName}</td>
                                                    <td className='text-center'>{product.productPrice}</td>
                                                    <td className='text-center'>
                                                        <button onClick={() => handleDelete(product.id)}> <MdDelete /></button>
                                                    </td>
                                                    <td className='text-center'><MdModeEdit /></td>
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
