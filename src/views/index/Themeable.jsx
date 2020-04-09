import React from "react";
import { Container, Row, Col } from "reactstrap";

const Themeable = () => {
  return (
    <section className="section bg-light edge top-left">
      <Container>
        <div className="section-heading text-center w-75 mx-auto">
          <h2 className="heading-line">Ease Themeable</h2>
          <p className="lead text-alternate">
            We've made easy to design and themefy our template, the use of SASS
            files allows designers to easily use the perfect color scheme to fit
            their needs. Besides, Laapp comes with an extraordinary organized
            file structure to allow the maximum flexibility when customizing
          </p>
        </div>

        <Row className="gap-y">
          <Col lg="6" className="mx-auto">
            <figure className="px-2">
              <img
                src={require("assets/img/screens/designer.png")}
                className="img-responsive"
                alt="..."
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Themeable;
