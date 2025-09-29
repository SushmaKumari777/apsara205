import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";


const LoginSchema = Yup.object().shape({
  username: Yup.string()
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
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
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
      <Container>
        <Row>
          <Col className="text-center my-4">
            <h1>Sign In</h1>
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
          initialValues={{ username: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-container p-4 border rounded shadow-sm">
                <Row className="mb-3">
                  <Col md={3}><b>Mobile</b></Col>
                  <Col md={9}>
                    <Field name="username" className="form-control" />
                    {errors.username && touched.username && (
                      <div className="error">{errors.username}</div>
                    )}
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}><b>Password</b></Col>
                  <Col md={9}>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    {errors.password && touched.password && (
                      <div className="error">{errors.password}</div>
                    )}
                  </Col>
                </Row>

                <Row>
                  <Col className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? 'Please wait...' : 'Continue'}
                    </button>
                  </Col>
                </Row>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Login;
