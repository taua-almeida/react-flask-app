import React from 'react';


import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";


export default function Main() {
  return (
    <>
      <main>
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      Welcome to Calitaz's App{" "}
                      <span>studies and development</span>
                    </h1>
                    <p className="lead text-white">
                      The app comes with differents types of modules and micro apps inside!
                      Enjoy and help develop more and better with me
                        </p>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Download Argon
                          </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                          </p>
                        <div>
                          <Badge color="primary" pill className="mr-1">
                            design
                            </Badge>
                          <Badge color="primary" pill className="mr-1">
                            system
                            </Badge>
                          <Badge color="primary" pill className="mr-1">
                            creative
                            </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                          </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-istanbul" />
                        </div>
                        <h6 className="text-success text-uppercase">
                          Build Something
                          </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                          </p>
                        <div>
                          <Badge color="success" pill className="mr-1">
                            business
                            </Badge>
                          <Badge color="success" pill className="mr-1">
                            vision
                            </Badge>
                          <Badge color="success" pill className="mr-1">
                            success
                            </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                          </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                          Prepare Launch
                          </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                          </p>
                        <div>
                          <Badge color="warning" pill className="mr-1">
                            marketing
                            </Badge>
                          <Badge color="warning" pill className="mr-1">
                            product
                            </Badge>
                          <Badge color="warning" pill className="mr-1">
                            launch
                            </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                          </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className="mt-5">
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Download Argon
                          </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                          </p>
                        <div>
                          <Badge color="primary" pill className="mr-1">
                            design
                            </Badge>
                          <Badge color="primary" pill className="mr-1">
                            system
                            </Badge>
                          <Badge color="primary" pill className="mr-1">
                            creative
                            </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                          </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-istanbul" />
                        </div>
                        <h6 className="text-success text-uppercase">
                          Build Something
                          </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                          </p>
                        <div>
                          <Badge color="success" pill className="mr-1">
                            business
                            </Badge>
                          <Badge color="success" pill className="mr-1">
                            vision
                            </Badge>
                          <Badge color="success" pill className="mr-1">
                            success
                            </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                          </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                          Prepare Launch
                          </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                          </p>
                        <div>
                          <Badge color="warning" pill className="mr-1">
                            marketing
                            </Badge>
                          <Badge color="warning" pill className="mr-1">
                            product
                            </Badge>
                          <Badge color="warning" pill className="mr-1">
                            launch
                            </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                          </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}