import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './addProduct.css'
import Menu from './Menu'
import axios from 'axios';

import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";


const SignupSchema = Yup.object().shape({
    productName: Yup.string()
        .min(3, 'Minimum three charecter required')
        .max(50, 'Too Long!')
        .required('Required'),
    productCategory: Yup.string().required('Required'),
    productSubCategory: Yup.string().required('Required'),
    productPrice: Yup.number()
        .positive('Price must be positive')
        .required('Required'),
    productGender: Yup.string().required('Required'),
    ProductOccasion: Yup.string().required('Required'),
    productDiscount: Yup.number()
        .positive('Discount must be positive')
        .required('Required'),
    productMaterial: Yup.string()
        .required('Required'),
    productDescription: Yup.string().required('Required'),

});
const categories = [
    {
        "id": "1",
        "categoryName": "Full-sleeves"
    },
    {
        "id": "2",
        "categoryName": "Half-sleeves"
    }

]
const subcategories = [
    {
        "id": "1",
        "subcategoryName": "Pooh"
    },
    {
        "id": "2",
        "subcategoryName": "Naina"
    },
    {
        "id": "3",
        "subcategoryName": "Geet"
    },
    {
        "id": "4",
        "subcategoryName": "Aisha"
    },
    {
        "id": "5",
        "subcategoryName": "Half-style"
    },
    {
        "id": "6",
        "subcategoryName": "Desi-formal"
    },
    {
        "id": "7",
        "subcategoryName": "Sanskari-drips"
    },

]
const occasions = [
    {
        "id": "1",
        "occasionName": "Office-wear"
    },
    {
        "id": "2",
        "occasionName": "Festive-wear"
    }


]
const AddProduct = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileChange = (e) => {
        setSelectedImages(e.target.files);
    };
    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)
    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>  <Menu></Menu> </Col>
                </Row>
                <Row>
                    <Col className='heading'>
                        <h1>Add Product</h1>
                        <Formik
                            initialValues={{
                                productName: '',
                                productCategory: '',
                                productSubCategory: '',
                                productPrice: '',
                                productGender: '',
                                ProductOccasion: '',
                                productDiscount: '',
                                productMaterial: '',
                                productDescription: '',
                            }}
                            validationSchema={SignupSchema}
                            // onSubmit={values => {
                            //     // same shape as initial values
                            //     console.log(values);
                            // }}
                            onSubmit={async (values, { resetForm }) => {
                                const formData = new FormData();

                                // ✅ Append userId from Redux store
                                formData.append("userId", currentUser.id);

                                // ✅ Append other form fields
                                Object.keys(values).forEach((key) => {
                                    formData.append(key, values[key]);
                                });

                                // ✅ Append image files
                                for (let i = 0; i < selectedImages.length; i++) {
                                    formData.append("images", selectedImages[i]);
                                }

                                try {
                                    const res = await axios.post("http://localhost:8090/api/ssproducts", formData, {
                                        headers: {
                                            "Content-Type": "multipart/form-data"
                                        }
                                    });
                                    console.log("Upload success:", res.data);
                                    alert("Product added successfully!");
                                    resetForm();
                                    setSelectedImages([]);
                                } catch (err) {
                                    console.error("Upload failed:", err);
                                    alert("Failed to add product");
                                }
                            }}
                        >

                            {({ errors, touched }) => (
                                <Form>
                                    <div className='aaa'>
                                        <Row>
                                            <Col md={3}  >
                                                <b>Product Name</b>
                                            </Col>
                                            <Col md={9}  >
                                                <Field name="productName" placeholder=" Enter Name" className='bbb' />
                                                <div className='error'>
                                                    {errors.productName && touched.productName ? (
                                                        <div>{errors.productName}</div>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3} >
                                                <div id="my-radio-group"><b>Gender</b></div>

                                            </Col>
                                            <Col md={9}  >
                                                <div role="group" aria-labelledby="my-radio-group">
                                                    <label>
                                                        <Field type="radio" name="gender" value="Women" />
                                                        Woemn
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
                                            <Col md={3}  >
                                                <b>Product-Category</b
                                                ></Col>
                                            <Col md={9}>
                                                <Field name="productCategory" as="select" className='bbb' >
                                                    <option value="">Choose category</option>
                                                    {/* <option value="half-sleeves">Half-Sleeves</option> */}
                                                    {/* <option value="full-sleeves">Full-Sleeves</option> */}
                                                    {
                                                        categories.map((category) => {
                                                            return (
                                                                <option value={category.id}>{category.categoryName}</option>

                                                            )

                                                        }

                                                        )
                                                    }
                                                </Field>
                                                {errors.productCategory && touched.productCategory ? (
                                                    <div className='error'>{errors.productCategory}</div>
                                                ) : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3} >
                                                <b>Product-Subcategory</b>
                                            </Col>
                                            <Col md={9}>
                                                <Field name="productsubCategory" as="select" className='bbb'>
                                                    <option value="">Choose Subcategory</option>
                                                    {/* <option value="pooh">Pooh</option>
                                                    <option value="naina">Naina</option>
                                                    <option value="geet">Geet</option>
                                                    <option value="aisha">Aisha</option>
                                                    <option value="half-style">Half-style</option>
                                                    <option value="desi-formals">Desi-formals</option>
                                                    <option value="desi-formals">Sanskari-drips</option> */}
                                                    {
                                                        subcategories.map((category) => {
                                                            return (
                                                                <option value={category.id}>{category.subcategoryName}</option>

                                                            )

                                                        }

                                                        )
                                                    }
                                                </Field>
                                                {errors.productsubCategory && touched.productsubCategory ? (
                                                    <div className='error'>{errors.productsubCategory}</div>
                                                ) : null}
                                            </Col>
                                        </Row>



                                        <Row>
                                            <Col md={3} >
                                                <b>Description</b>
                                            </Col>
                                            <Col md={9} >
                                                <div>
                                                    {/* <label htmlFor="description">Description</label> */}
                                                    <Field as="textarea" id="description" name="description" className="bbb" />
                                                    {/* <ErrorMessage name="description" component="div" className="error-message" /> */}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3} ><b>Price</b></Col>
                                            <Col md={9}  >
                                                <Field name="price" className="bbb" placeholder=" Enter Price" />
                                                {errors.price && touched.price ? (
                                                    <div className='error'>{errors.price}</div>
                                                ) : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3} >
                                                <div id="my-radio-group"><b>Material</b></div>

                                            </Col>
                                            <Col md={9} >
                                                <div role="group" aria-labelledby="my-radio-group" >
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
                                            <Col md={3}><b>Occasion</b></Col>
                                            <Col md={9}>
                                                <Field name="occasion" as="select" className='bbb'>
                                                    <option value="">Choose occasion</option>
                                                    {/* <option value="office">Office Wear</option>
                                                    <option value="festive">Festive Wear</option> */}
                                                    {
                                                        occasions.map((category) => {
                                                            return (
                                                                <option value={category.id}>{category.occasionName}</option>

                                                            )

                                                        }

                                                        )
                                                    }
                                                </Field>
                                                {errors.occasion && touched.occasion ? (
                                                    <div className='error'>{errors.occasion}</div>
                                                ) : null}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={3}><b>Discount</b></Col>
                                            <Col md={9}>
                                                <Field name="discount" className='bbb' placeholder=" Enter Discount" />
                                                {errors.discount && touched.discount ? (
                                                    <div className='error'>{errors.discount}</div>
                                                ) : null}
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col>Upload Images</Col>
                                            <Col>
                                                <input
                                                    type="file"
                                                    multiple
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                />
                                                {selectedImages.length > 0 && (
                                                    <div>{selectedImages.length} image(s) selected</div>
                                                )}
                                            </Col>
                                        </Row>



                                        <Row>
                                            <Col className="d-flex justify-content-center">
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