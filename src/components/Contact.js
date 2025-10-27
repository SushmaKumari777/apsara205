
import React, { useState, useEffect } from "react";
import { Container, Row, Col ,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import { FaRegUserCircle } from "react-icons/fa";
import Menu from "./Menu";


const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Minimum three charecter required')
        .max(20, 'Too Long!')
        .required('Required'),
    mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')
        .required('Mobile number is required'),
    email: Yup.string().email("Invalid email").required("E-Mail Id Required"),
    productDescription: Yup.string().required("Required")
});

const Contact = () => {
    // const dispatch = useDispatch();
    //   const navigate = useNavigate();

    //   const [loading, setLoading] = useState(false);
    //   const { isLoggedIn } = useSelector((state) => state.auth);
    //   const { message } = useSelector((state) => state.message);

    //   useEffect(() => {
    //     dispatch(clearMessage());
    //   }, [dispatch]);

    //   const handleLogin = (formValue) => {
    //     const { mobile, password } = formValue;
    //     setLoading(true);

    //                         dispatch(login({ mobile, password }))
    //                           .unwrap()
    //                           .then(() => {
    //                             navigate("/home");
    //                           })
    //                           .catch(() => {
    //                             setLoading(false);
    //                           });
    //   };

    //   if (isLoggedIn) {
    //     return <Navigate to="/home" />;
    //   }
    return (
        <div>
            <Row>
                <Col>
                    <Menu></Menu>
                </Col>
            </Row>
            <div className="background">
                <Container>

                    <Row>
                        <Col className="text-center my-1">
                            <h1>Contact us</h1>
                        </Col>
                    </Row>

                    <Formik
                        initialValues={{ name: '', mobile: '', password: '' }}
                        validationSchema={ContactSchema}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div>

                                    <Row>
                                        <Col>
                                            <Field name="name" className="form-control" placeholder="Enter Full Name" />
                                            <div className="error">
                                                {errors.name && touched.name ? (
                                                    <div>{errors.name}</div>
                                                ) : null}
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col >
                                            <Field name="mobile" className="form-control" placeholder="Enter Mobile number" />
                                            {errors.mobile && touched.mobile && (
                                                <div className="error">{errors.mobile}</div>
                                            )}
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col >
                                            <Field name="email" className="form-control" placeholder="Enter Email address" />
                                            {errors.mobile && touched.mobile && (
                                                <div className="error">{errors.mobile}</div>
                                            )}
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col>
                                            <b>Comment</b>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col>
                                            <div>
                                                <Field as="textarea" id="description" name="description" className="form-control" style={{ width: "420px" ,height:"150px"}}/>
                                            </div>
                                        </Col>
                                    </Row>
                                            &nbsp;
                                            &nbsp;
                                            
                                    <Row >
                                        <Col className="text-center">
                                        <Button variant="secondary" className="button">Submit</Button>

                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </div>
        </div>
    )
}

export default Contact
