import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
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
            <Container className='login'>
                <Row>
                    <Col xs={12} sm={8} md={6} lg={4} className='heading'>
                        <h1 >Add Category</h1>
                    </Col>
                </Row>
                {message && (
                    <Row>
                        <Col>
                            <div className="alert alert-danger text-center">{message}</div>
                        </Col>
                    </Row>
                )}
                <Formik
                    initialValues={{
                        name: '',
                    }}
                    validationSchema={CategorySchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className='aaa'>
                                <Row>
                                    <Col md={4}>
                                        <label>Category Name</label>
                                    </Col>
                                    <Col md={4}>
                                        <Field name="name" className="inputbox" autoComplete="off" />
                                        {errors.name && touched.name ? <div className='error'>{errors.name}</div> : null}
                                    </Col>
                                    <Col md={4}>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={loading}
                                        >
                                            {loading ? 'Please wait...' : ' + Add'}
                                        </button>
                                    </Col>
                                </Row>
                                <Row>

                                </Row>
                            </div>
                        </Form>
                    )}
                </Formik>


            </Container >
            <Container>
                <Row>
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
        </div >
    );
};

export default AddCategory