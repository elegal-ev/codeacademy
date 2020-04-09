import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PricingPlan from "./PricingPlan.jsx";
import MoreInfoButton from "components/MoreInfoButton.jsx";

const plans = [
  {
    name: "basic",
    desc: "For individuals",
    class: "order-md-first",
    price: { monthly: 0, yearly: 0 }
  },
  {
    name: "enterprise",
    desc: "For large companies",
    class: "order-md-last",
    price: { monthly: 19.99, yearly: 14.99 }
  },
  {
    name: "business",
    desc: "For small business",
    price: { monthly: 49.99, yearly: 39.99 },
    best: true
  }
];

const Pricing = props => {
  const [basis, setBasis] = useState("monthly");

  return (
    <section className="section pricing-plans">
      <div className="shapes-container overflow-clear">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />

        <div className="icon-holder">
          <i className="icon pe pe-7s-cash pe-3x" />

          <FontAwesomeIcon
            icon={["fas", "dollar-sign"]}
            className="icon fa-3x"
          />

          <i className="icon pe pe-7s-piggy pe-3x" />

          <i className="icon pe pe-7s-cart pe-3x" />

          <FontAwesomeIcon
            icon={["far", "credit-card"]}
            className="icon fa-3x"
          />

          <FontAwesomeIcon
            icon={["far", "money-bill-alt"]}
            className="icon fa-3x"
          />
        </div>
      </div>

      <Container>
        <div className="section-heading text-center">
          <span className="rounded-pill shadow-box bold py-2 px-4">
            <FontAwesomeIcon
              icon={["far", "lightbulb"]}
              className="text-primary mr-2"
            />
            <span className="text-primary">Save more</span> with these awesome
            plans
          </span>
          <h2 className="mt-3 heading-line">Transparent pricing</h2>
          <p className="lead text-muted">
            Our plans have everything you need to take your app to the next
            level. <span className="highlight">No hidden fees.</span>
          </p>

          <ButtonGroup>
            <Button
              color="secondary"
              onClick={e => setBasis("monthly")}
              active={basis === "monthly"}
            >
              Monthly
            </Button>

            <Button
              color="secondary"
              onClick={e => setBasis("yearly")}
              active={basis === "yearly"}
            >
              Yearly
            </Button>
          </ButtonGroup>
        </div>

        <Row className="no-gutters align-items-center pricing-plans-options">
          {plans.map((plan, i) => (
            <PricingPlan {...plan} basis={basis} key={i} />
          ))}
        </Row>
      </Container>

      <Container className="pt-0 border-bottom">
        <Row className="align-items-center">
          <Col md="8">
            <div className="text-center text-md-left">
              <h4 className="bold accent">Not sure what's better for you?</h4>
              <p className="mt-0">
                You can start for free, as long as you fell in love with our App
                you can decide what plan better suites your needs.{" "}
                <span className="italic dotted">
                  By picking any of the pay plans you'll get 30 days free trial.
                </span>
              </p>
            </div>
          </Col>

          <Col md="4" className="text-center text-md-right">
            <MoreInfoButton
              className="btn btn-primary btn-lg text-contrast p-4 ml-md-auto"
              text="Try it now !"
              to="#!"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
