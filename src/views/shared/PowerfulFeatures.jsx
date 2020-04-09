import React from "react";
import { Container, Row, Col } from "reactstrap";
import PowerfulCard from "./PowerfulCard.jsx";
import MoreInfoButton from "components/MoreInfoButton.jsx";

const createCards = use => {
  let features = [];
  let cards = [
    {
      class: "mt-6 mt-6 mx-lg-auto",
      icon: "paint-bucket",
      title: "Customizable",
      animation: { delay: 0 },
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
    },

    {
      class: "mx-lg-auto",
      icon: "light",
      title: "Creative",
      animation: { delay: 800 },
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
    },

    {
      class: "mr-lg-auto",
      icon: "diamond",
      title: "Powerful Design",
      animation: { delay: 500 },
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
    },

    {
      class: "mt-6n mr-lg-auto",
      icon: "cash",
      title: "Affordable",
      animation: { delay: 1200 },
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
    }
  ];

  cards.forEach((el, i) => {
    if (i % 2 === use) {
      features.push(<PowerfulCard {...el} key={i} />);
    }
  });

  return features;
};

const PowerfulFeatures = () => {
  return (
    <section className="section alter3-features">
      <div className="shapes-container">
        <div className="shape shape-ring shape-ring-1">
          <div className="animation animation--rotating" />
        </div>
        <div className="shape shape-ring shape-ring-2">
          <div className="animation animation--rotating" />
        </div>
        <div className="shape shape-circle animation--clockwise">
          <div />
        </div>

        <div className="shape background-shape-main" />
      </div>

      <Container>
        <Row>
          <Col lg="5" className="order-lg-last">
            <div className="section-heading">
              <p className="px-2 text-alternate text-uppercase bold">
                Powerful features await for you
              </p>
              <h2 className="heading-line">
                A complete feature stack ready to help you
              </h2>

              <p className="lead text-muted my-4 semi-bold">
                Laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do
                eiusmod tempor incididunt ut labore aliqua. Ut enim adi minim
                veniam, quis nostrud exercitation{" "}
              </p>

              <MoreInfoButton
                className="btn btn-primary text-contrast bold"
                text="Know More"
                to="#!"
              />
            </div>
          </Col>

          <Col lg="7" className="pr-lg-6">
            <Row>
              <Col lg="6" className="rotated-cards">
                {createCards(0)}
              </Col>
              <Col lg="6" className="rotated-cards">
                {createCards(1)}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PowerfulFeatures;
