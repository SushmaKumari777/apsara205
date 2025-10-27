import React, { useState, useEffect } from 'react'
import { Col, Container, Row ,Button} from 'react-bootstrap'
import Menu from './Menu'
import axios from 'axios';

import { Link, useParams } from 'react-router'

const Products = () => {

    const { productId } = useParams();
    console.log(productId)

    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8090/api/ssproducts/${productId}`).then((response) => {
            console.log(response.data.productName)
            setProduct(response.data)
            // console.log(product.productName)
        })
    }, []);
    return (
        <div>
            <Row>
                <Col><Menu></Menu> </Col>
            </Row>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <Row>
                                    <Col><img src={`http://localhost:8090/upload/${product?.images[0]}`}
                                        style={{ width: "500px", height: "500px", objectFit: "cover", borderRadius: "10px" }}
                                    /></Col>
                                    <Col> <img src={`http://localhost:8090/upload/${product?.images[1]}`}
                                        style={{ width: "500px", height: "500px", objectFit: "cover", borderRadius: "8px" }}
                                    /></Col>
                                </Row>
                            </div>



                        </Col>
                        <Col>
                            <h5>{product?.productName || "loading"}</h5>
                            <h5>{product?.productPrice || "loading"}</h5>
                            <p>{product?.productDescription || "loading"}</p>

                            <Button variant="outline-secondary" className="button">Add to cart</Button>
                            <Button variant="outline-secondary" className="button">Buy now</Button>

                        </Col>

                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default Products