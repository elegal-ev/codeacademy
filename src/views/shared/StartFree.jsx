import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'gatsby';

const renderIcons = () => {
  let icons = [];
  const items = [
    { icon: '7s-hourglass', prefix: 'pe' },
    { icon: '7s-magic-wand', prefix: 'pe' },
    { icon: '7s-rocket', prefix: 'pe' },
    { icon: '7s-plugin', prefix: 'pe' },
    { icon: '7s-like', prefix: 'pe' },
    { icon: '7s-clock', prefix: 'pe' },
    { icon: '7s-smile', prefix: 'pe' },
    { icon: '7s-piggy', prefix: 'pe' },
    { icon: '7s-shield', prefix: 'pe' },
    { icon: '7s-server', prefix: 'pe' },
  ];
  items.forEach((icon, i) => {
    icons.push(
      <i
        className={`icon ${icon.prefix} ${i.prefix}-${icon.icon} ${icon.prefix}-3x`}
        key={i}
      />,
    );
  });

  return icons;
};

const StartFree = () => {
  return (
    <section className="section start-free">
      <div className="shapes-container">{renderIcons()}</div>

      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <div className="section-heading text-center">
              <i className="pe pe-7s-unlock fa-3x text-alternate" />
              <h2 className="heading-line bold mt-4">
                Start your 15 days free trial now!
              </h2>
              <p className="lead text-muted">
                By signing up you will get 15 days free trial. You
                won't be charged until the trial period ends,{' '}
                <span className="italic">
                  don't let this offer pass in from of your eyes
                </span>
              </p>
            </div>
          </Col>
        </Row>

        <div className="nav flex-column flex-md-row align-items-center justify-content-center">
          <Link
            to="#!"
            className="btn btn-alternate btn-lg py-3 px-4 bold mr-0 mr-md-3 mb-3 mb-md-0"
          >
            Sign up
          </Link>
          <Link
            to="mailto:support@5studios.net"
            className="btn btn-outline-dark btn-lg py-3 px-4 bold"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default StartFree;
