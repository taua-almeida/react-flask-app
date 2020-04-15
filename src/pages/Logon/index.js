import React from 'react';

import { FaReact, FaPython } from 'react-icons/fa';
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from 'reactstrap';

import AuthNav from '../../components/Navbars/AuthNav';
import SimpleFooter from '../../components/Footers/SimpleFooter';

import LoginForm from './loginForms';

export default function Login() {

  return (
    <>
      <AuthNav pathTo={"/register"} />
      <main className="main-content">
        <section className="section section-shaped section-xl">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-6 mb-5">
            <Row className="justify-content-center">
              <Col lg="7">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white">
                    <div className="text-muted text-center">
                      <FaReact size={26} />  <FaPython size={26} />
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 p-lg-5">
                    <div className="text-center text-muted mb-4">
                      <h1 className="display-4 text-muted">Sign In</h1>
                    </div>
                    <LoginForm />
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <Link to="/">
                      <small className="text-light">Forgot password?</small>
                    </Link>
                  </Col>
                  <Col className="text-right" xs="6">
                    <Link to="/register">
                      <small className="text-light">Create new account</small>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

        </section>
      </main>
      <SimpleFooter footerType={"footer-logon"}/>
    </>
  );
}