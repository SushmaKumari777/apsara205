import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Menu from './Menu'
import axios from 'axios';

import { Link, useParams } from 'react-router'
import { useSelector } from "react-redux";
const Products = () => {

    const { productId } = useParams();
    console.log(productId)

    const [product, setProduct] = useState();
    const handleShow = () => setShow(true);
    const [addresses, setAddresses] = useState();

    const [show, setShow] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8090/api/ssproducts/${productId}`).then((response) => {
            console.log(response.data.productName)
            setProduct(response.data)
            // console.log(product.productName)
        })
        axios.get(`http://localhost:8090/api/addresses/user/${currentUser.id}`).then((response) => {

            console.log(response.data)
            setAddresses(response.data)

        })
    }, []);


    const AddCart = (product) => {
        // console.log(pooh)
        const data = {
            "userId": currentUser.id,
            "items": [
                {
                    "productId": product.id,
                    "quantity": 1,
                    "price": product.productPrice
                }
            ]

        }
        console.log(data)
        try {
            const res = axios.post("http://localhost:8090/api/carts", data);
            console.log("product add to cart:", res.data);
            alert("product add to cart successfully!");
            window.location.reload();
        } catch (err) {
            console.error(" Failed add to cart", err);
            alert("Failed add to cart");
        }
    }
    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)


    return (
        <div>
            <Row>
                <Col><Menu></Menu> </Col>
            </Row>
            <section>
                <Container>
                    <Row>
                        <Col md={8}>
                            <div>
                                <Row>
                                    <Col ><img src={`http://localhost:8090/upload/${product?.images[0]}`}
                                        style={{ width: "270px", height: "400px", objectFit: "cover", borderRadius: "10px", marginTop: "40px" }}
                                    />
                                        <img src={`http://localhost:8090/upload/${product?.images[1]}`}
                                            style={{ width: "270px", height: "400px", objectFit: "cover", borderRadius: "8px", marginTop: "40px", marginLeft: "10px" }}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={4}>
                            <h1 className='text-left' style={{ marginTop: "40px", color: "#641E16" }}>{product?.productName || "loading"}</h1>
                            <h5 className='text-left' style={{ marginTop: "20px", color: "#641E16" }}>Rs. {product?.productPrice || "loading"}.00</h5>
                            <p className='text-left' style={{ marginTop: "20px", color: "#641E16" }}> Discount {product?.productDiscount || "loading"}</p>
                            <p className='text-left' style={{ marginTop: "20px", color: "#641E16" }}> Occasion - {product?.productOccasion || "loading"}</p>
                            <p className='text-left' style={{ marginTop: "20px", color: "#641E16" }}> Material - {product?.productMaterial || "loading"}</p>
                            {/* <h5 style={{marginTop:"20px"}}>{product?.quantity || "loading"}</h5> */}
                            <Button variant="outline-secondary" className="button" onClick={() => AddCart(product)} style={{ marginTop: "20px" }}>Add to cart</Button>
                            <Button variant="outline-secondary" className="button" onClick={handleShow} style={{ marginTop: "20px", marginLeft: "10px", width: "100px", height: "40px" }}><Link to={'/Address'} style={{
                                textDecoration: "none",
                                color: "#641E16",
                                fontWeight: "bold"
                            }}><p>Buy now</p></Link></Button>
                            <p className='text-left' style={{ marginTop: "20px", color: "#641E16" }}>{product?.productDescription || "loading"}</p>
                        </Col>

                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default Products