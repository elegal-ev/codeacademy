import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="site-footer section border-top">
      <Container className="pb-3">
        <Row className="gap-y text-center text-md-left">
          <Col md="6" lg="4" className="mr-auto">
            <img src={require("assets/img/logo.png")} alt="" className="logo" />

            <p className="lead">
              <span className="bold">Laapp</span>, a premium yet ease to
              customize App Landing Page
            </p>
          </Col>

          <Col md="3" lg="4">
            <h6 className="py-2 bold">Find us</h6>

            <p>
              We are improving our social presence, please like us or follow us
              to know all the news about products, releases and services
            </p>
            <nav className="nav justify-content-center justify-content-md-start">
              <a
                href="https://www.facebook.com/5studios.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm brand-facebook"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </nav>
          </Col>

          <Col md="3">
            <h6 className="py-2 bold">Other Products</h6>

            <nav className="nav flex-column">
              <a
                className="nav-item py-2"
                href="https://themeforest.net/item/dashcore-saas-startup-software-template/22397137"
                target="_blank"
                rel="noopener noreferrer"
              >
                DashCore
              </a>
              <a
                className="nav-item py-2"
                href="https://themeforest.net/item/cronos-softwarestartup-html-template/21411634"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cronos
              </a>
              <a
                className="nav-item py-2"
                href="https://themeforest.net/user/5studiosnet/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                More ...
              </a>
            </nav>
          </Col>
        </Row>

        <hr className="mt-5" />

        <Row className="small align-items-center">
          <Col md="4">
            <p className="mt-2 mb-md-0 text-muted text-center text-md-left">
              © 2019
              <a
                href="https://5studios.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                5studios
              </a>
              . All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
