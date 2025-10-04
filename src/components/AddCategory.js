import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './../App.css'
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import axios from 'axios';


const CategorySchema = Yup.object().shape({
    name: Yup.string()
        
        .required('Category name is required'),
    
});

const AddCategory = () => {
    
    const dispatch = useDispatch();
        const navigate = useNavigate();

        const [loading, setLoading] = useState(false);
        const { isLoggedIn } = useSelector((state) => state.auth);
        const { message } = useSelector((state) => state.message);

        useEffect(() => {
            dispatch(clearMessage());
        }, [dispatch]);
        useEffect(() => {
           axios.get('http://localhost:8090/api/cats').then((response)=>{
            console.log(response)
           })
        }, []);

        const handleSubmit = async (formValue,resetForm) => {
            const { name } = formValue;
            setLoading(true);

            console.log(formValue)
            try {
                const res = await axios.post("http://localhost:8090/api/cats", formValue );
                console.log("category name succesfully added:", res.data);
                alert("category name added successfully!");
                // resetForm();
               
            } catch (err) {
                console.error(" Failed to add category name", err);
                alert("Failed to add category name");
            }
        };

        if (isLoggedIn) {
            // return <Navigate to="/home" />;
        }



        return (
            <div>
                <Container className='login'>
                    <Row>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <h1>Add Category</h1>
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
                        // onSubmit={values => {
                        //     // same shape as initial values
                        //     console.log(values);
                        // }}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className='aaa'>

                                    <Row>
                                        <Col><label>Category Name</label></Col>
                                        <Col>
                                            <Field name="name" className="inputbox" autoComplete="off" />
                                            {errors.name && touched.name ? <div>{errors.name}</div> : null}
                                        </Col>
                                    </Row>
                                    

                                    <Row>
                                        <Col>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={loading}
                                            >
                                                {loading ? 'Please wait...' : 'Continue'}
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        )}
                    </Formik>


                </Container >
            </div >
        );
    };

export default AddCategory