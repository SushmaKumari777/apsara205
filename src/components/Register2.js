import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../App.css'

const SignupSchema = Yup.object().shape({
    mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Invalid mobile number') // only 10 digits allowed
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),

    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
});
const Register2 = () => {
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
                                console.log(values);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className='aaa'>
                                        <Row>
                                            <Col md={3}>Mobile</Col>
                                            <Col md={9}>
                                                <Field name="mobile" type="text" />
                                                {errors.mobile && touched.mobile ? <div className='error'>{errors.mobile}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Email Id</Col>
                                            <Col md={9}>
                                                <Field name="email" type="email" />
                                                {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={3}>Password</Col>
                                            <Col md={9}>
                                                <Field name="password" type="password" />
                                                {errors.password && touched.password ? <div className='error'>{errors.password}</div> : null}
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
