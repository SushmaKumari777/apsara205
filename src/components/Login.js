import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import { FaRegUserCircle } from "react-icons/fa";
import "./login.css";
import Menu from "./Menu";


const LoginSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')
    .required('Mobile number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleLogin = (formValue) => {
    const { mobile, password } = formValue;
    setLoading(true);

    dispatch(login({ mobile, password }))
      .unwrap()
      .then(() => {
        navigate("/home");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }



  return (
    <div>
      <Row>
        <Col>
          <Menu></Menu>
        </Col>
      </Row>

      <div className="background">

        <Container>

          <Row>
            <Col className="text-center my-2">
              <FaRegUserCircle className="login-icon" />
            </Col>
          </Row>
          <Row>
            <Col className="text-center my-1">
              <h1>Login</h1>
            </Col>
          </Row>

          {message && (
            <Row>
              <Col>
                <div className="alert alert-danger text-center">{message}</div>
              </Col>
            </Row>
          )}

          <Formik
            initialValues={{ mobile: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <Row>
                    <Col>
                      <b>  Mobile</b>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    {/* <Col md={3}><b>Mobile</b></Col> */}
                    <Col >
                      <Field name="mobile" className="form-control" placeholder="Enter Mobile number" />
                      {errors.mobile && touched.mobile && (
                        <div className="error">{errors.mobile}</div>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <b>Password</b>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    {/* <Col md={3}><b>Password</b></Col> */}
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
                  </Row>
                  <Row>
                    <Col className="text-center">
                      <Button

                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                      >

                        {loading ? 'Please wait...' : 'Continue'}
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </div>
  );
};

export default Login;
