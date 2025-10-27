import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../App.css'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(20, 'Too Long!')
      .required('Name is required'),
  
    city: Yup.string()
      .required('City is required'),
  
    state: Yup.string()
      .required('State is required'),
  
    pincode: Yup.string()
      .matches(/^[1-9][0-9]{5}$/, 'Invalid Pincode (must be 6 digits)')
      .required('Pincode is required'),
  
    address: Yup.string()
      .min(5, 'Address is too short')
      .required('Address is required'),
  
    house: Yup.number()
      .required('House/Flat no. is required'),
  
    street: Yup.string()
      .required('Street/Locality is required'),
  
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
  
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid mobile number')
      .required('Mobile number is required'),
  
    alternatePhone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid alternate number')
      .notRequired(),
  
    addressType: Yup.string()
      .oneOf(['home', 'office'], 'Select address type')
      .required('Address type is required'),
  });

const Address = () => {






    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <Row>
                        <Col className='bbb'>  
                        <h1>Delivery Address</h1>
                        </Col>
                    </Row>
                      
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
                                            <Col md={3}>Name</Col>
                                            <Col md={9}>
                                                <Field name="name" className='bbb' />
                                                {errors.name && touched.name ? (
                                                    <div className='error'>{errors.name}</div>
                                                ) : null}
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col md={3}>City</Col>
                                            <Col  md={9}>
                                                <Field name="city" type="text"  className='bbb'/>
                                                {errors.city && touched.city ? <div className='error'>{errors.city}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>State</Col>
                                            <Col  md={9}>
                                                <Field name="state" type="text"  className='bbb'/>
                                                {errors.state && touched.state ? <div className='error'>{errors.state}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Pincode</Col>
                                            <Col  md={9}>
                                                <Field name="pincode" type="pincode"  className='bbb'/>
                                                {errors.pincode && touched.pincode ? <div className='error'>{errors.pincode}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Address</Col>
                                            <Col  md={9}>
                                                <Field name="address" type="text" className='bbb'/>
                                                {errors.address && touched.address ? <div className='error'>{errors.address}</div> : null}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={3}>House/Flat no.</Col>
                                            <Col  md={9}>
                                                <Field name="house" type="text"  className='bbb'/>
                                                {errors.house && touched.house ? <div className='error'>{errors.house}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Street/Locality</Col>
                                            <Col  md={9}>
                                                <Field name="street" type="text"  className='bbb'/>
                                                {errors.street && touched.street ? <div className='error'>{errors.street}</div> : null}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={3}>Email Id</Col>
                                            <Col  md={9}>
                                                <Field name="email" type="email"  className='bbb'/>
                                                {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col md={3}>Mobile</Col>
                                            <Col  md={9}>
                                                <Field name="mobile" type="pincode"  className='bbb'/>
                                                {errors.mobile && touched.mobile ? <div className='error'>{errors.mobile}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Alternate Phone(Optional)</Col>
                                            <Col  md={9}>
                                                <Field name="alternatePhone" type="text" className='bbb'/>
                                                {errors.alternatePhone && touched.alternatePhone ? <div>{errors.mobile}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>
                                                <div id="my-radio-group">Address Type</div>
                                            </Col>
                                            <Col  md={9}>
                                                <div role="group" aria-labelledby="my-radio-group" className='bbb'> 
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
                                                <button type="submit" class="btn btn-light">Save Address</button>
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
