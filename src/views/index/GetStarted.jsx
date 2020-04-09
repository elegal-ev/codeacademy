import React from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GetStarted = () => {
  return (
    <section className="section bg-contrast edge top-left">
      <Container>
        <div className="d-flex align-items-center flex-column flex-lg-row">
          <div className="text-center text-lg-left">
            <p className="light mb-0 accent lead">Ready to get started?</p>
            <h2 className="mt-0">Get the theme on themeforest</h2>
          </div>

          <nav className="nav mt-3 mt-lg-0 ml-lg-auto">
            <a
              href="#demos"
              className="btn btn-alternate btn-rounded mr-3 scrollto"
            >
              Check Demos <i className="fas long-arrow-alt-right" />
            </a>
            <a
              href="https://themeforest.net/item/laapp-app-landing-page/23562388"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-contrast btn-rounded"
            >
              <FontAwesomeIcon
                icon={["fas", "cash-register"]}
                className="icon"
              />
              Buy it
            </a>
          </nav>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
