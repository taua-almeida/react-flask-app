import React, { PureComponent } from "react";

import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap';

export default class SimpleFooter extends PureComponent {

  render() {
    let footerType = this.props.footerType || "footer";
    return(
      <>
        <footer className={footerType}>
          <Container>
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="http://localhost:3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                   >
                    Copyright
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="http://localhost:3000/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Medium
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://localhost:3000/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </NavLink>
                  </NavItem>
                 </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    )
  }

}