import React from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "reactstrap";
import MoreInfoButton from "components/MoreInfoButton";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";

const renderItems = () => {
  let items = [];

  for (let i = 1; i < 4; i++) {
    items.push(
      <Tilt options={{ max: 20, glare: true, maxGlare: 0.4 }} key={i}>
        <div
          className={classNames(
            "rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast",
            { "mt-5": i > 1 }
          )}
        >
          <figure>
            <img
              src={require(`assets/img/screens/app/pieces/${i}.png`)}
              className="img-responsive"
              alt=""
            />
          </figure>
        </div>
      </Tilt>
    );
  }

  return items;
};

const MultipleDesignBlocks = () => {
  return (
    <section className="section powered-design">
      <div className="shapes-container">
        <div className="shape shape-circle shape-circle-1">
          <Fade bottom right duration={1500}>
            <div />
          </Fade>
        </div>
        <div className="shape shape-circle shape-circle-2">
          <Fade bottom right duration={1200} delay={500}>
            <div />
          </Fade>
        </div>
        <div className="shape shape-ring animation--rotating-diagonal">
          <div />
        </div>
        <div className="shape shape-triangle shape-animated">
          <div className="animation--rotating" />
        </div>

        <div className="shape pattern-dots-1" />
      </div>

      <Container>
        <Row className="gap-y align-items-center">
          <Col md="6">
            <div className="section-heading">
              <h2 className="heading-line">
                Powered with multiple design blocks
              </h2>
              <p className="lead text-muted">
                Unlock the power of Web Design. Laapp comes with multiple
                reusable code blocks you can use to build awesome web pages.
              </p>
            </div>

            <MoreInfoButton
              className="btn btn-outline-alternate more-link mt-0"
              text="Now is the time"
              to="#!"
            />
          </Col>

          <Col md="6">{renderItems()}</Col>
        </Row>
      </Container>
    </section>
  );
};

export default MultipleDesignBlocks;
