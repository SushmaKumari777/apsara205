import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../App.css'

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Minimum Six charecter required')
        .max(50, 'Too Long!')
        .required('Required'),
    mobile: Yup.string()
        .required('Mobile number is required')
        .matches(/^[6-9]\d{9}$/, 'Enter a valid 10 Digit Mobile Number')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
const Register = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Registration</h1>
                        <Formik
                            initialValues={{
                                password: '',
                                mobile: '',
                                email: '',
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                // same shape as initial values
                                console.log(values);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className='aaa'>
                                        <Row>
                                            <Col md={3}>Mobile</Col>
                                            <Col md={9}>
                                                <Field name="mobile" className='bbb' />
                                                <div className="error">
                                                    {errors.mobile && touched.mobile ? (
                                                        <div>{errors.mobile}</div>
                                                    ) : null}
                                                </div>

<<<<<<< HEAD
                                   <Row>
                                    <Col>Email Id</Col>
                                    <Col>
                                    <Field name="email" type="email" />
                                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                    
                                    </Col>
                                    
                                   </Row>
                                    <Row>
                                        <Col>
                                        <button type="submit" className='btn'>Submit</button>
                                        </Col>
                                    </Row>
=======
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={3}>Email Id</Col>
                                            <Col md={9}>
                                                <Field name="email" type="email" className='bbb' />
                                                <div className="error">
                                                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                                </div>


                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col md={3}>Password</Col>
                                            <Col md={9}>
                                                <Field name="password" type="password" className='bbb' />
                                                <div className="error">
                                                    {errors.password && touched.password ? (
                                                        <div>{errors.password}</div>
                                                    ) : null}
                                                </div>

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button variant="primary" type="submit">Register</Button>
                                            </Col>
                                        </Row>
>>>>>>> 7cf6cb520fb111322b17f6d2627daab6793cf10e
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register