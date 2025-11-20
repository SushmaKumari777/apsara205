import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Menu from "./Menu";
import { Col, Container, Row } from 'react-bootstrap';




const Account = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <section>

        <Row>
          <Col><Menu></Menu> </Col>
        </Row>
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>

      </section>
      <section style={{backgroundColor:"#F1F3F6"}}>
        <Row>
          <Col>
            <Row>
              <Col>
                <Row>
                  <Col>
                  <div style={{backgroundColor:"white", width:"200px",height:"60px",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                    Hello,
                   <h4>Sushma Kumari</h4> 
                  </div>
                  </Col>
                </Row>
                <Row>
                  <Col>avc</Col>
                </Row>
              </Col>
              <Col>gfhj</Col>
            </Row>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Account;