import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
const Buy = () => {
  const { productId } = useParams();

  return (
    <div>
      {/* <h1> {productId}</h1> */}
      {/* <h2>{productId}</h2> */}
      {/* <p>₹{productTitle}</p>
      <p>{productDescription}</p> */}

      {/* <section>
        <Container>
          <Row>
            {
              products.map((product) => {
                <Col>
                  <img src={product.images} alt='' />
               
                </Col>
              }

              )
            }
          </Row>
        </Container>
      </section> */}
      <section>
        <Row>
        
            <Col>
            <img src=''/>
            </Col>
            <Col>
              <p>{productId}</p>
              <p>Rs{ }</p>
              <p>Size Chart</p>
              <p>Size :</p>
              {/* <Row>
                <Col md={2}> 
                  <p>XS</p>
                </Col>
                <Col md={2}>
                  <p>S</p>
                </Col>
                <Col md={2}>
                  <p>M</p>
                </Col>
                <Col md={2}>
                  <p>L</p>
                </Col>
                <Col md={2}>
                  <p>XL</p>
                </Col>
                <Col md={2}>
                  <p>XXL</p>
                </Col>
              </Row> */}
              <p>Quantity:</p>
              <Button>Add To Cart</Button>
              <br></br>
              <br></br>
              <Button>Buy Now</Button>
              </Col>
              </Row>
      </section>


    </div>
  )
}

export default Buy
