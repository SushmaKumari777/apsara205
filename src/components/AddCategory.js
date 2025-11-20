import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './../App.css'
import { clearMessage } from "../slices/message";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import Menu from "./Menu";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router'

import Breadcrumb from 'react-bootstrap/Breadcrumb';


const checkNameExists = async (name) => {
    // Replace this with your actual API call
    const response = await fetch(`http://localhost:8090/api/cats/check?name=${name} `);
    const data = await response.json();
    return data.exists; // Should return true if mobile number exists
};

const CategorySchema = Yup.object().shape({
    name: Yup.string()
        .required("Category name is required")
        .test(
            "checkDuplicateCategory",
            "Category Name already exists",
            async function (value) {
                if (!value) return false;
                const exists = await checkNameExists(value);
                return !exists;
            }
        ),
});
const AddCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);
    useEffect(() => {
        axios.get('http://localhost:8090/api/cats').then((response) => {
            console.log(response.data)
            setCategories(response.data)
        })
    }, []);

    const handleSubmit = async (formValue, resetForm) => {
        const { name } = formValue;
        setLoading(true);

        console.log(formValue)
        try {
            const res = await axios.post("http://localhost:8090/api/cats", formValue);
            console.log("category name succesfully added:", res.data);
            alert("category name added successfully!");
            // resetForm();
            window.location.reload();
        } catch (err) {
            console.error(" Failed to add category name", err);
            alert("Failed to add category name");
        }
    };

    if (isLoggedIn) {
        // return <Navigate to="/home" />;
    }
    const handleDelete = (id) => {
        if (window.confirm("Are you sure")) {
            axios.delete(`http://localhost:8090/api/cats/${id}`).then((response) => {
                console.log('Category successfully deleted')
                alert('Category successfully deleted')
                window.location.reload();
            })
        }
    }
    return (
        <div>
            <div>
                <Row>
                    <Col>
                        <Menu></Menu>
                    </Col>
                </Row>

            </div>

            <div>
                <Container>

                    <Row>
                        <Col md={4} style={{ color: "#641E16", }}>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="adminDashboard"> Admin Dashboard </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col>
                            <h1>Category</h1>
                        </Col>
                    </Row>
                    {message && (
                        <Row>
                            <Col>
                                <div className="alert alert-danger text-center">{message}</div>
                            </Col>
                        </Row>
                    )}
                    <div>
                    <Formik
                        initialValues={{
                            name: '',
                        }}
                        validationSchema={CategorySchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div>
                                    <Row>
                                        <Col>
                                        {/* <label>Add Category Name</label> */}
                                        <br></br>
                                            <Field name="name" className="inputbox" autoComplete="off" placeholder="Add category name" />
                                            {errors.name && touched.name ? <div className='error'>{errors.name}</div> : null}
                                            <br></br>
                                            <Button
                                                type="submit"
                                                // className="btn btn-primary"
                                                disabled={loading}
                                                variant="secondary"
                                            >
                                                {loading ? 'Please wait...' : ' Submit'}
                                            </Button>
                                        </Col>
                                        <Col>
                                           
                                        </Col>
                                    </Row>

                                </div>
                            </Form>
                        )}
                    </Formik>
                    </div>
                  
                   


                </Container >
                <Container>
                    <Row >
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className='text-center'>S.No.</th>
                                        <th className='text-center'>Category</th>
                                        <th className='text-center'>Delete</th>
                                        <th className='text-center'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories ?
                                            categories.map((category, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className='text-center'>{index + 1}</td>
                                                        <td>{category.name}</td>
                                                        <td className='text-center'>
                                                            <button onClick={() => handleDelete(category.id)}> <MdDelete /></button>
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

            </div>
        </div >
    );
};

export default AddCategory