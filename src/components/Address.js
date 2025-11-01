import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../App.css'
import { useSelector } from 'react-redux';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Too Long!')
        .required('Name is required'),
    address: Yup.string()
        .min(5, 'Address is too short')
        .required('Address is required'),
    street: Yup.string()
        .required('Street/Locality is required'),
    city: Yup.string()
        .required('City is required'),
    district: Yup.string()
        .required('District is required'),
    state: Yup.string()
        .required('State is required'),
    pincode: Yup.string()
        .matches(/^[1-9][0-9]{5}$/, 'Invalid Pincode (must be 6 digits)')
        .required('Pincode is required'),
    mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Invalid mobile number')
        .required('Mobile number is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    addressType: Yup.string()
        .oneOf(['home', 'office'], 'Select address type')
        .required('Address type is required'),






    // alternatePhone: Yup.string()
    //   .matches(/^[0-9]{10}$/, 'Invalid alternate number')
    //   .notRequired(),
    //   house: Yup.number()
    //   .required('House/Flat no. is required'),

});




const Address = () => {

    // const [products, setProducts] = useState();

    //     useEffect(() => {
    //         axios.get('http://localhost:8090/api/addresses').then((response) => {
    //             console.log(response.data)
    //             setProducts(response.data)
    //         })
    //     }, []);

    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)

    const handleSubmit = async (formValue, resetForm) => {
        const { name ,addressLine1,addressLine2,city,district,state,pincode,mobile,email,addressType} = formValue;


        console.log(formValue)
        try {
            const res = await axios.post("http://localhost:8090/api/addresses", formValue);
            console.log("address succesfully added:", res.data);
            alert("address added successfully!");
            // resetForm();
            window.location.reload();
        } catch (err) {
            console.error(" Failed to add address", err);
            alert("Failed to add address");
        }
    };


    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <Col className='bbb'>
                                <h1>Delivery Address</h1>
                            </Col>
                        </Row>

                        <Formik
                            initialValues={{
                                userId:currentUser.id,
                                name: '',
                                address: '',
                                street: '',
                                city: '',
                                district: '',
                                state: '',
                                pincode: '',
                                mobile: '',
                                email: '',
                                addressType: '',
                                // alternatePhone: '',



                            }}
                            validationSchema={SignupSchema}
                            onSubmit={handleSubmit}



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
                                            <Col md={3}>Address</Col>
                                            <Col md={9}>
                                                <Field name="address" type="text" className='bbb' />
                                                {errors.address && touched.address ? <div className='error'>{errors.address}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Street/Locality</Col>
                                            <Col md={9}>
                                                <Field name="street" type="text" className='bbb' />
                                                {errors.street && touched.street ? <div className='error'>{errors.street}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>City</Col>
                                            <Col md={9}>
                                                <Field name="city" type="text" className='bbb' />
                                                {errors.city && touched.city ? <div className='error'>{errors.city}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>District</Col>
                                            <Col md={9}>
                                                <Field name="district" type="text" className='bbb' />
                                                {errors.district && touched.district ? <div className='error'>{errors.district}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>State</Col>
                                            <Col md={9}>
                                                <Field name="state" type="text" className='bbb' />
                                                {errors.state && touched.state ? <div className='error'>{errors.state}</div> : null}
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col md={3}>Pincode</Col>
                                            <Col md={9}>
                                                <Field name="pincode" type="pincode" className='bbb' />
                                                {errors.pincode && touched.pincode ? <div className='error'>{errors.pincode}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Mobile</Col>
                                            <Col md={9}>
                                                <Field name="mobile" type="pincode" className='bbb' />
                                                {errors.mobile && touched.mobile ? <div className='error'>{errors.mobile}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Email Id</Col>
                                            <Col md={9}>
                                                <Field name="email" type="email" className='bbb' />
                                                {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>
                                                <div id="my-radio-group">Address Type</div>
                                            </Col>
                                            <Col md={9}>
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
                                        {/* <Row>
                                            <Col md={3}>House/Flat no.</Col>
                                            <Col  md={9}>
                                                <Field name="house" type="text"  className='bbb'/>
                                                {errors.house && touched.house ? <div className='error'>{errors.house}</div> : null}
                                            </Col>
                                        </Row> */}






                                        {/* <Row>
                                            <Col md={3}>Alternate Phone(Optional)</Col>
                                            <Col  md={9}>
                                                <Field name="alternatePhone" type="text" className='bbb'/>
                                                {errors.alternatePhone && touched.alternatePhone ? <div>{errors.mobile}</div> : null}
                                            </Col>
                                        </Row> */}


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






