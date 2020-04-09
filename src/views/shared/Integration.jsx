import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MoreInfoButton from 'components/MoreInfoButton.jsx';

const renderBubbles = () => {
  let bubbles = [];
  const items = [
    { icon: 'apx', name: 'Autoprefixer' },
    { icon: 'bs', name: 'Bootstrap' },
    { icon: 'cordova', name: 'Cordova' },
    { icon: 'css', name: 'CSS' },
    { icon: 'fa', name: 'Fontawesome' },
    { icon: 'html', name: 'HTML' },
    { icon: 'js', name: 'Javascript' },
    { icon: 'npm', name: 'Npm' },

    { icon: 'sass', name: 'SASS' },
    { icon: 'apx', name: 'Autoprefixer' },
    { icon: 'bs', name: 'Bootstrap' },
    { icon: 'cordova', name: 'Cordova' },
    { icon: 'css', name: 'CSS' },
    { icon: 'fa', name: 'Fontawesome' },
    { icon: 'html', name: 'HTML' },
    { icon: 'js', name: 'Javascript' },
  ];

  items.forEach((bubble, i) => {
    const iconSize =
      i % 4 === 0
        ? 'xl'
        : i % 3 === 0
        ? 'lg'
        : i % 2 === 0
        ? 'md'
        : 'xxl';

    bubbles.push(
      <div
        key={i}
        className={`bubble bg-contrast rounded-circle p-2 shadow icon icon-${iconSize}`}
      >
        <span className="badge badge-contrast shadow-box">
          {bubble.name}
        </span>
      </div>,
    );
  });

  return bubbles;
};

const Integration = () => {
  return (
    <section className="section integration-bubbles">
      <Container className="overflow-hidden">
        <Row>
          <Col md="6">
            <div className="bubbles-wrapper">
              <div className="animations m-0">{renderBubbles()}</div>
            </div>
          </Col>

          <Col md="6">
            <div className="section-heading">
              <p className="text-alternate text-uppercase bold">
                Extending core
              </p>
              <h2 className="heading-line">
                Integrations to make it better
              </h2>
              <p className="lead text-muted">
                Ever wonder about the wonder of Laap: We count on
                hundreds of friends contributing day by day to make
                Laapp a wonderful tool
              </p>
            </div>

            <MoreInfoButton text="Explore all integration" to="#!" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Integration;
