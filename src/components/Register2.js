import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../App.css'

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),

    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),

    mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Invalid mobile number') // only 10 digits allowed
        .required('Required'),
});
const Register2 = () => {
    return (
        <div>

            <Container>
                <Row>
                    <Col>
                        <h1>Registration</h1>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                mobile: '',
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                console.log(values);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className='aaa'>
                                        <Row>
                                            <Col>Email Id</Col>
                                            <Col>
                                                <Field name="email" type="email" />
                                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>Password</Col>
                                            <Col>
                                                <Field name="password" type="password" />
                                                {errors.password && touched.password ? <div>{errors.password}</div> : null}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>Mobile</Col>
                                            <Col>
                                                <Field name="mobile" type="text" />
                                                {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <button type="submit" className='btn'>Submit</button>
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

export default Register2
