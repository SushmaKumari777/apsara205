import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './register.css'
import InputMask from 'react-input-mask';

const SignupSchema = Yup.object().shape({

    // mobile: Yup.string()
    //     .required('Mobile number is required')
    //     .matches(/^[6-9]\d{9}$/, 'Enter a valid 10 Digit Mobile Number'),
    // .required('Required'),
    mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, 'Enter a valid 10 Digit Mobile Number')
        .required("Required"),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(6, 'Minimum Six charecter required')
        .max(50, 'Too Long!')
        .required('Required'),
});
const Register = () => {
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col className='heading'>
                                    <h1>Registration</h1>
                                </Col>
                            </Row>
                            <Formik
                                initialValues={{
                                    mobile: '',
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className='background'>
                                            <Row>
                                                <Col md={3}><b>Mobile</b></Col>
                                                <Col md={9}>
                                                    {/* <Field name="mobile" className='bbb' /> */}
                                                    <InputMask mask="9999999999" maskChar={null} name="mobile" className='boxes' />

                                                    <div className="error">
                                                        {errors.mobile && touched.mobile ? (
                                                            <div>{errors.mobile}</div>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={3}><b>Email Id</b></Col>
                                                <Col md={9}>
                                                    <Field name="email" type="email" className='boxes' />
                                                    <div className="error">
                                                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={3}><b>Password</b></Col>
                                                <Col md={9}>
                                                    <Field name="password" type="password" className='boxes' />
                                                    <div className="error">
                                                        {errors.password && touched.password ? (
                                                            <div>{errors.password}</div>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button className='button' type="submit" align-items center>Submit</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Register