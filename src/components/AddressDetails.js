// import React from 'react'
import React, { useState, useEffect } from 'react'
import Menu from "./Menu";
import Address from "./Address";
import { Container, Row, Col, Table, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from "../slices/message";
import axios from 'axios';
import { CiSquareRemove } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from 'react-router'
import { Formik, Field, Form } from 'formik';
import Badge from 'react-bootstrap/Badge';
import { BsPlus } from "react-icons/bs";

const AddressDetails = () => {

 const [addresses, setAddresses] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    useEffect(() => {
      
        axios.get(`http://localhost:8090/api/addresses/user/${currentUser.id}`).then((response) => {
    
          console.log(response.data)
          setAddresses(response.data)
    
        })
      }, []);
        const { user: currentUser } = useSelector((state) => state.auth);
        console.log(currentUser)

    const handleRemove = (id) => {
        if (window.confirm("Are you sure you want to delete this address?")) {
          axios.delete(`http://localhost:8090/api/addresses/${id}`).then((response) => {
            console.log('Product successfully deleted')
            alert('Product successfully deleted')
            window.location.reload();
          })
        }
      }
  return (

    <div>
        <Row>
            <Col>
              <div className='delivery-address'>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    {/* <Modal.Title>Modal title</Modal.Title> */}
                  </Modal.Header>

                  <Modal.Body>
                    <Address />
                  </Modal.Body>

                  {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                  {/* </Modal.Footer> */} 
                </Modal>
                <Formik
                  initialValues={{
                    addressId: '',
                  }}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                  {({ values }) => (
                    <Form>



                      {/* <div role="group" aria-labelledby="my-radio-group"> */}
                      <Table Striped rows hover >
                        <thead>
                          <tr>
                            <th style={{ backgroundColor: "#641E16", color: "white", }}>
                              <h5>Delivery Address </h5>
                            </th>
                          </tr>
                          <tr>
                           
                           <th>
                             <p onClick={handleShow} style={{color:"#641E16"}}><BsPlus  style={{color:"#641E16",fontSize: "28px",backgroundColor:"#D4D4D4",borderRadius:" 20px"}}/> <b>Add a new address</b> </p>
                           </th>
                         </tr>
                        </thead>
                        <tbody>

                          {
                            addresses ? addresses.map((address, index) => {
                              return (
                                // <Row key="index">
                                //   <Col>
                                <tr>
                                  <td>

                                    <Field type="radio" name="addressId" value={address.id} /> &nbsp; <b>{address.name}</b> &nbsp;<Badge bg="dark" > {address.addressType} </Badge> &nbsp;{address.mobile}
                                    <p>{address.addressLine1}, {address.addressLine2}, {address.city}, {address.district}, {address.state} - <b>{address.pin}</b>
                                    <br></br>
                                     Gmail - {address.email}</p>
                                    <p></p>
                                    <Button onClick={() => handleRemove(address.id)} style={{backgroundColor:"#D4D4D4",color:"black",border:"#6C757D"}}>Remove</Button>
                                    &nbsp;
                                    {/* <Button variant="outline-secondary">Edit</Button> */}
                                   
                                  </td>
                                  
                                </tr>
                              )
                            })
                              : "no address available"
                          }                       
                          <div>Picked: {values.addressId}</div>
                          
                          <button type="button" class="btn btn-light"
                            style={{
                              color: "#641E16",
                              // fontWeight: "400"
                            }}
                          >Submit </button>
                        </tbody>
                      </Table>
                      {/* </div> */}


                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>

    </div>
  )
}

export default AddressDetails