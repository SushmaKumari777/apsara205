import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../App.css'
import Gender from './Gender';

const SignupSchema = Yup.object().shape({
    productName: Yup.string()
        .min(2, 'Minimum too charecter required')
        .max(50, 'Too Long!')
        .required('Required'),
    gender: Yup.string().required('Required'),
    productCategory: Yup.string().required('Required'),
    productsubCategory: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    price: Yup.number()
        .positive('Price must be positive')
        .required('Required'),
    material: Yup.string()
        .required('Required'),
    occasion: Yup.string().required('Required'),
    discount: Yup.number()
        .positive('Discount must be positive')
        .required('Required'),



});
const AddProduct = () => {
    return (
        <div>
            <Container className='bbb'>
                <Row>
                    <Col>
                        <h1>Add Product</h1>
                        <Formik
                            initialValues={{
                                productName: '',
                                gender: '',
                                productCategory: '',
                                productsubCategory: '',
                                discription: '',
                                price: '',
                                material: '',
                                occasion: '',
                                discount: '',

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
                                            <Col md={3}>Product Name</Col>
                                            <Col md={9}>
                                                <Field name="productName" className='bbb' />
                                                <div className='error'>
                                                {errors.productName && touched.productName ? (
                                                    <div>{errors.productName}</div>
                                                ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>
                                                <div id="my-radio-group">Gender</div>

                                            </Col>
                                            <Col md={9}>
                                                <div role="group" aria-labelledby="my-radio-group">
                                                    <label>
                                                        <Field type="radio" name="gender" value="Women" />
                                                        Women
                                                    </label>
                                                    <label>
                                                        <Field type="radio" name="gender" value="Men" />
                                                        Men
                                                    </label>
                                                    {/* <div>Picked: {values.picked}</div> */}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Product-Category</Col>
                                            <Col md={9}>
                                                <Field name="productCategory" as="select" className='bbb'>
                                                    <option value="">Choose category</option>
                                                    <option value="half-sleeves">Half-Sleeves</option>
                                                    <option value="full-sleeves">Full-Sleeves</option>
                                                </Field>
                                                {errors.productCategory && touched.productCategory ? (
                                                    <div className='error'>{errors.productCategory}</div>
                                                ) : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Product-Subcategory</Col>
                                            <Col md={9}>
                                                <Field name="productsubCategory" as="select" className='bbb'>
                                                    <option value="">Choose Subcategory</option>
                                                    <option value="pooh">Pooh</option>
                                                    <option value="naina">Naina</option>
                                                    <option value="geet">Geet</option>
                                                    <option value="aisha">Aisha</option>
                                                    <option value="half-style">Half-style</option>
                                                    <option value="desi-formals">Desi-formals</option>
                                                    <option value="desi-formals">Sanskari-drips</option>
                                                </Field>
                                                {errors.productsubCategory && touched.productsubCategory ? (
                                                    <div className='error'>{errors.productsubCategory}</div>
                                                ) : null}
                                            </Col>
                                        </Row>



                                        <Row>
                                            <Col md={3}>Description</Col>
                                            <Col md={9}>
                                                <div>
                                                    {/* <label htmlFor="description">Description</label> */}
                                                    <Field as="textarea" id="description" name="description" />
                                                    {/* <ErrorMessage name="description" component="div" className="error-message" /> */}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Price</Col>
                                            <Col md={9}>
                                                <Field name="price" className='bbb' />
                                                {errors.price && touched.price ? (
                                                    <div className='error'>{errors.price}</div>
                                                ) : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>
                                                <div id="my-radio-group">Material</div>

                                            </Col>
                                            <Col md={9}>
                                                <div role="group" aria-labelledby="my-radio-group" className='bbb'>
                                                    <label>
                                                        <Field type="radio" name="material" value="cotton" />
                                                        Cotton
                                                    </label>
                                                    <label>
                                                        <Field type="radio" name="material" value="chiffon" />
                                                        Chiffon
                                                    </label>
                                                    <label>
                                                        <Field type="radio" name="material" value="georgette" />
                                                        Georgette
                                                    </label>
                                                    {/* <div>Picked: {values.picked}</div> */}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Occasion</Col>
                                            <Col md={9}>
                                                <Field name="occasion" as="select" className='bbb'>
                                                    <option value="">Choose occasion</option>
                                                    <option value="office">Office Wear</option>
                                                    <option value="festive">Festive Wear</option>
                                                </Field>
                                                {errors.occasion && touched.occasion ? (
                                                    <div className='erroe'>{errors.occasion}</div>
                                                ) : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}>Discount</Col>
                                            <Col md={9}>
                                                <Field name="discount" className='bbb' />
                                                {errors.discount && touched.discount ? (
                                                    <div className='error'>{errors.discount}</div>
                                                ) : null}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <button type="submit" className='btn'>Add Product</button>
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

export default AddProduct