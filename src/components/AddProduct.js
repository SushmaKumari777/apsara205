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
    productCategory: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
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
            <Container>
                <Row>
                    <Col>
                        <h1>Registration</h1>
                        <Formik
                            initialValues={{
                                productName: '',
                                productCategory: '',
                                gender: '',
                                price: '',
                                material: '',
                                occasion: '',
                                discount: '',
                                discription: ''
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
                                            <Col>Product Name</Col>
                                            <Col>
                                                <Field name="productName" className='bbb' />
                                                {errors.productName && touched.productName ? (
                                                    <div>{errors.productName}</div>
                                                ) : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>Product-Category</Col>
                                            <Col>
                                                <Field name="productCategory" as="select">
                                                    <option value="">Choose category</option>
                                                    <option value="green">Naina</option>
                                                    <option value="blue">Geet</option>
                                                </Field>
                                                {errors.productCategory && touched.productCategory ? (
                                                    <div>{errors.productCategory}</div>
                                                ) : null}
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col>
                                                <div id="my-radio-group">Gender</div>

                                            </Col>
                                            <Col>
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
                                            <Col>Description</Col>
                                            <Col>
                                                <div>
                                                    {/* <label htmlFor="description">Description</label> */}
                                                    <Field as="textarea" id="description" name="description" />
                                                    {/* <ErrorMessage name="description" component="div" className="error-message" /> */}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>Price</Col>
                                            <Col>
                                                <Field name="price" className='bbb' />
                                                {errors.price && touched.price ? (
                                                    <div>{errors.price}</div>
                                                ) : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div id="my-radio-group">Material</div>

                                            </Col>
                                            <Col>
                                                <div role="group" aria-labelledby="my-radio-group">
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
                                            <Col>Occasion</Col>
                                            <Col>
                                                <Field name="occasion" as="select">
                                                    <option value="">Choose occasion</option>
                                                    <option value="office">Office Wear</option>
                                                    <option value="festive">Festive Wear</option>
                                                </Field>
                                                {errors.occasion && touched.occasion ? (
                                                    <div>{errors.occasion}</div>
                                                ) : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>Discount</Col>
                                            <Col>
                                                <Field name="discount" className='bbb' />
                                                {errors.discount && touched.discount ? (
                                                    <div>{errors.discount}</div>
                                                ) : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <button type="submit">Add Product</button>
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