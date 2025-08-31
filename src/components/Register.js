import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../App.css'
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
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col className='bbb'>
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
                                    <div className='aaa'>
                                        <Row>
                                            <Col md={3}>Mobile</Col>
                                            <Col md={9}>
                                                {/* <Field name="mobile" className='bbb' /> */}
                                                <InputMask mask="9999999999" maskChar={null} name="mobile" className='bbb' />

                                                <div className="error">
                                                    {errors.mobile && touched.mobile ? (
                                                        <div>{errors.mobile}</div>
                                                    ) : null}
                                                </div>
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
                                                <Button variant="primary" type="submit">Submit</Button>
                                            </Col>
                                        </Row>
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