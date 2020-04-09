import React from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nwyneed = () => {
  return (
    <section className="section bg-light">
      <Container className="bring-to-front py-md-0">
        <div className="shadow bg-contrast p-5 rounded">
          <FontAwesomeIcon
            icon={["fas", "exclamation-circle"]}
            className="fa-3x accent"
          />

          <a
            href="mailto:support@5studios.net"
            className="mt-4 accent d-flex align-items-center"
          >
            <h4 className="mr-3">Not what you need ?</h4>
          </a>
          <p className="mt-4">
            Our commitment is with our customers and providing you with the tool
            you really need is ur goal. If this template is lacking a feature
            you really need, we are here to help you, just drop us a line and
            we'll get it done for you and it wil part of the template.
          </p>

          <hr className="mt-5" />
          <p className="small bold">
            If you want your feature to be unique and not being part of the
            theme, well we have a solution as well,
            <span className="accent">
              just contact us at{" "}
              <a href="mailto:support@5studios.net">support@5studios.net</a>
            </span>
            .
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Nwyneed;
