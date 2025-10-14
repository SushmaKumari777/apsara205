import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router'
import { IoIosHeartEmpty } from "react-icons/io";
import axios from 'axios';
import { useSelector } from "react-redux";

const AllProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        axios.get('http://localhost:8090/api/ssproducts').then((response) => {
            console.log(response.data)
            setProducts(response.data)
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
     
        } catch (err) {
            console.error(" Failed add to cart", err);
            alert("Failed add to cart");
        }
    }
    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)
    return (
        <div>
            <section className='latestw'>
                <Row>
                    {
                        products ?
                            products.map((product, index) => {
                                return (
                                    <Col xs={6} md={3} >
                                        <div className='square'>
                                            {/* <Link to={'/buy/' + pooh.title + pooh.price1}> */}
                                            <IoIosHeartEmpty className='wishlist' />
                                            <img src={`http://localhost:8090/upload/${product.images[0]}`} />
                                            <p>{product.productName}</p>{}
                                            <h6>Rs.{product.productPrice}</h6>
                                            <Button className="button" onClick={() => AddCart(product)}>Add to Cart</Button>
                                            {/* </Link> */}
                                        </div>
                                    </Col>
                                )
                            }
                            )
                            : <div>
                                no data available
                            </div>
                    }
                </Row>
            </section>
        </div>
    )
}

export default AllProducts
