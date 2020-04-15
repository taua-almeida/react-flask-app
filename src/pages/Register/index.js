import React from 'react';

import { FaReact, FaPython } from 'react-icons/fa';

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

import RegisterForm from './registerForms';


export default function Register() {

  return (
    <>
      <AuthNav buttonName={"Login"}/>
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
          <Container className="pt-lg-7 mb-4">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white">
                    <div className="text-muted text-center">
                      <FaReact size={26} />  <FaPython size={26} />
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Sign Up</small>
                    </div>
                    <RegisterForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );

}