import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../App.css'

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Minimum too charecter required')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
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
                                firstName: '',
                                lastName: '',
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
                                        <Col>First Name</Col>
                                        <Col>
                                            <Field name="firstName" className='bbb'/>
                                            {errors.firstName && touched.firstName ? (
                                                <div>{errors.firstName}</div>
                                            ) : null}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>Last Name</Col>
                                        <Col>
                                        <Field name="lastName" />
                                    {errors.lastName && touched.lastName ? (
                                        <div>{errors.lastName}</div>
                                    ) : null}
                                        </Col>
                                    </Row>

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