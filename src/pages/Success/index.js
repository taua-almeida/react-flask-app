import React from 'react';

import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

import AuthNav from '../../components/Navbars/AuthNav';
import SimpleFooter from '../../components/Footers/SimpleFooter';

import { Link } from "react-router-dom";

//import { isAuthenticated } from "../../services/auth";

export default function Success() {
  return (
    <>
      <AuthNav />
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
          <Container className="pt-lg-9 mb-9">
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Thanks for your registration!</h4>
                    <p className="mt-0">
                      This is a working project.
                      </p>
                    <div className="mt-4">
                      <Link to="/">
                        <Button
                          block
                          className="btn-round"
                          color="success"
                          size="lg"
                          type="button"
                          outline
                        >
                          <span className="nav-link-inner--text ml-1">
                           Start using the app
                          </span>
                        </Button>
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link to="/">
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          <span className="nav-link-inner--text ml-1">
                            Take me to login page
                          </span>
                        </Button>
                      </Link>
                    </div>
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