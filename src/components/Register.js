import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./register.css";
import Menu from "./Menu";
import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";
import { useDispatch, useSelector } from "react-redux";

const SignupSchema = Yup.object().shape({
  // username: Yup.string()
  //   .matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscores allowed")
  //   .min(3, "Username must be at least 3 characters")
  //   .max(20, "Username must be less than 20 characters")
  //   .required("Username is required"),
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10 Digit Mobile No. ")
    .required("Mobile No. is Mandetory!"),
  email: Yup.string().email("Invalid email").required("E-Mail Id Required"),
  password: Yup.string()
    .min(6, "Minimum Six charecter required")
    .max(50, "Maximum 50 charecter required")
    .required("Password Required"),
});
const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const handleRegister = (formValue) => {
    console.log()
    const {mobile, email, password } = formValue;
   
    setSuccessful(false);

    dispatch(register({mobile, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };
  return (
    <div>
      <div>
        <Row>
          <Col>
            <Menu></Menu>
          </Col>
        </Row>
      </div>
      <section>
        <Container>
          <Row>
            <Col>
              <Row>
                <Col className="heading">
                  <h1>Create Account</h1>
                </Col>
              </Row>
              <Formik
                initialValues={{
                  mobile: "",
                 
                  email: "",
                  password: "",
                }}
                validationSchema={SignupSchema}
                // onSubmit={values => {
                // same shape as initial values
                // console.log(values);
                // }}
                onSubmit={handleRegister}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="background">
                      <Row>
                      <Col>
                          <b>Mobile no.</b>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Field name="mobile" className="bbb" placeholder="Enter Mobile no." />
                          <div className="error">
                            {errors.mobile && touched.mobile ? (
                              <div>{errors.mobile}</div>
                            ) : null}
                          </div>
                        </Col>
                      </Row>
                      {/* <Row>
                        <Col>
                          <b>Mobile</b>
                        </Col>
                      </Row>
                      <Row>

                        <Col>
                          <Field name="mobile" className="bbb" />

                          <div className="error">
                            {errors.mobile && touched.mobile ? (
                              <div>{errors.mobile}</div>
                            ) : null}
                          </div>
                        </Col>
                      </Row> */}
                      <Row>
                        <Col>
                          <b>Email Address</b>
                        </Col>
                      </Row>
                      <Row>

                        <Col>
                          <Field name="email" type="email" className="boxes" />
                          <div className="error">
                            {errors.email && touched.email ? (
                              <div>{errors.email}</div>
                            ) : null}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <b>Password</b>
                        </Col>
                      </Row>
                      <Row>

                        <Col>
                          <Field
                            name="password"
                            type="password"
                            className="boxes"

                          />
                          <div className="error">
                            {errors.password && touched.password ? (
                              <div>{errors.password}</div>
                            ) : null}
                          </div>
                        </Col>
                      </Row>
                      {/* <Row>
                        <Col>
                          <b>Confirm Password</b>
                        </Col>
                      </Row>
                    
                    <Row className="mb-3">
                      <Col>
                        <Field
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                        />
                        {errors.password && touched.password && (
                          <div className="error">{errors.password}</div>
                        )}
                      </Col>
                    </Row> */}
                      <Row>
                        <Col>
                          <Button
                            className="button"
                            type="submit"
                            align-items
                            center
                          >
                            Sign up
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
          <Row>
            <Col>
              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div >
  );
};

export default Register;
