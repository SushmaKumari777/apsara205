import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../App.css'

const SignupSchema = Yup.object().shape({
    // name: Yup.string()
    // //   .min(2, 'Name must be at least 2 characters')
    // //   .max(50, 'Too Long!')
    //   .required('Name is required'),
  
    // city: Yup.string()
    //   .required('City is required'),
  
    // state: Yup.string()
    //   .required('State is required'),
  
    // pincode: Yup.number()
    //   .matches(/^[0-9]{6}$/, 'Invalid Pincode (must be 6 digits)')
    //   .required('Pincode is required'),
  
    // address: Yup.string()
    // //   .min(5, 'Address is too short')
    //   .required('Address is required'),
  
    // house: Yup.number()
    //   .required('House/Flat no. is required'),
  
    // street: Yup.string()
    //   .required('Street/Locality is required'),
  
    // email: Yup.string()
    //   .email('Invalid email')
    //   .required('Email is required'),
  
    // mobile: Yup.number()
    //   .matches(/^[0-9]{10}$/, 'Invalid mobile number')
    //   .required('Mobile number is required'),
  
    // alternatePhone: Yup.number()
    //   .matches(/^[0-9]{10}$/, 'Invalid alternate number')
    //   .notRequired(),
  
    // addressType: Yup.string()
    //   .oneOf(['home', 'office'], 'Select address type')
    //   .required('Address type is required'),
  });

const Address = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Delevery</h1>
                        <Formik
                            initialValues={{
                                name: '',
                                city: '',
                                state: '',
                                pincode: '',
                                address: '',
                                house: '',
                                street: '',
                                email: '',
                                mobile: '',
                                alternatePhone: '',
                                addressType: '',
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
                                            <Col>Name</Col>
                                            <Col>
                                                <Field name="name" className='bbb' />
                                                {errors.name && touched.name ? (
                                                    <div>{errors.name}</div>
                                                ) : null}
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col>City</Col>
                                            <Col>
                                                <Field name="city" type="text" />
                                                {errors.city && touched.city ? <div>{errors.city}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>State</Col>
                                            <Col>
                                                <Field name="state" type="text" />
                                                {errors.state && touched.state ? <div>{errors.state}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>Pincode</Col>
                                            <Col>
                                                <Field name="pincode" type="pincode" />
                                                {errors.pincode && touched.pincode ? <div>{errors.pincode}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>Address</Col>
                                            <Col>
                                                <Field name="address" type="text" />
                                                {errors.address && touched.address ? <div>{errors.address}</div> : null}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>House/Flat no.</Col>
                                            <Col>
                                                <Field name="house" type="text" />
                                                {errors.house && touched.house ? <div>{errors.house}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>Street/Locality</Col>
                                            <Col>
                                                <Field name="street" type="text" />
                                                {errors.street && touched.street ? <div>{errors.street}</div> : null}
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
                                            <Col>Mobile</Col>
                                            <Col>
                                                <Field name="mobile" type="pincode" />
                                                {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>Alternate Phone(Optional)</Col>
                                            <Col>
                                                <Field name="alternatePhone" type="text" />
                                                {errors.alternatePhone && touched.alternatePhone ? <div>{errors.mobile}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div id="my-radio-group">Address Type</div>
                                            </Col>
                                            <Col>
                                                <div role="group" aria-labelledby="my-radio-group">
                                                    <label>
                                                        <Field type="radio" name="addressType" value="home" />
                                                        Home
                                                    </label>
                                                    <label>
                                                        <Field type="radio" name="addressType" value="office" />
                                                        Office
                                                    </label>
                                                    {/* <div>Picked: {values.picked}</div> */}
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <button type="submit" className='btn'>Save Address</button>
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

export default Address
