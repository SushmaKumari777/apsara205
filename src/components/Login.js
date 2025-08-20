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
});

const Login = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                       <Row>
                        <Col className='bbb'>
                        <h1>Sign in</h1>
                        </Col>
                       </Row>
                        <Formik
                            initialValues={{
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
                                            <Col md={3}>Email Id</Col>
                                            <Col md={9}>
                                                <Field name="email" type="email" className='bbb' />
                                                {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={3}>Password</Col>
                                            <Col md={9}>
                                                <Field name="password" type="password"  className='bbb'/>
                                                {errors.password && touched.password ? <div className='error'>{errors.password}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <button type="submit" className='btn'>Continue</button>
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

export default Login