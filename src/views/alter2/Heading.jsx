import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';
import Terminal from 'react-animated-term';
import 'react-animated-term/dist/react-animated-term.css';
import { navigate } from 'gatsby';

const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const termLines = [
  {
    text: 'python3 bootstrap_eLegal.py',
    cmd: true,
    delay: 80,
  },
  {
    text: '✔ Style checked.',
    cmd: false,
    delay: 1000,
  },
  {
    text: '✔ Tests passed (23913/23913)',
    cmd: false,
    delay: 1000,
  },
  {
    text: '✔ Connected to database.',
    cmd: false,
    delay: 1000,
  },
  {
    text: "✔ App deployed. Let's rock!",
    cmd: false,
    repeat: true,
    repeatCount: 2,
    frames: spinner.map(function (spinner) {
      return {
        text: spinner + " initiating codename 'LEGALTECH' ...",
        delay: 40,
      };
    }),
  },
  {
    text: '',
    cmd: true,
  },
];

const shapes = [
  { duration: 1500, delay: 100 },
  { duration: 1000, delay: 100 },

  { duration: 500, delay: 200 },
  { duration: 500, delay: 200 },

  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 100 },

  { duration: 1000, delay: 100 },
  { duration: 1000, delay: 300 },
];

const para = {
  fontFamily: 'monospace',
};

const Heading = () => {
  return (
    <header className="header alter2-header section">
      <div className="shapes-container">
        {/* diagonal shapes */}
        {shapes.map((shape, i) => (
          <Fade bottom>
            <div
              className="shape shape-animated shape-diagonal"
              duration={shape.duration}
              delay={shape.delay}
            />
          </Fade>
        ))}
        {/* animated shapes */}
        <div className="animation-shape text-primary   animation--clockwise">
          <h3 style={para}>§</h3>
        </div>
        <div className="animation-shape text-primary  animation--anti-clockwise">
          <h3 style={para}>§</h3>
        </div>
        <div className="animation-shape text-primary  animation--clockwise">
          <h3 style={para}>§</h3>
        </div>
        <div className="animation-shape animation--clockwise">
          <h3 style={para}>§</h3>
          <div
            style={para}
            className="animation--rotating text-primary "
          >
            <h3>§</h3>
          </div>
        </div>
        <div className="animation-shape animation--rotating-diagonal">
          <div
            style={para}
            className="animation--rotating text-primary "
          >
            <h3>§</h3>
          </div>
        </div>
        <div className="animation-shape animation--anti-clockwise">
          <div
            style={para}
            className="animation--rotating text-primary "
          >
            <h3>§</h3>
          </div>
        </div>
        {/* static shapes */}
        <div className="static-shape shape-ring-1" />
        <div className="static-shape shape-ring-2" />
        <div className="static-shape shape-circle shape-circle-1">
          <Fade top right>
            <div />
          </Fade>
        </div>
        <div className="static-shape shape-circle shape-circle-2">
          <Fade top right delay={500}>
            <div />
          </Fade>
        </div>
        <div className="static-shape pattern-dots-1" />
        <div className="static-shape pattern-dots-2" />
        {/*  main shape */}
        <div className="static-shape background-shape-main" />
        {/*  ghost shapes */}
        <div className="static-shape ghost-shape ghost-shape-1" />
      </div>

      <Container>
        <Row>
          <Col md="6">
            {/* <img className="display-4 display" src={require("assets/img/logos/2.png")} alt="eLegal" /> */}
            <h1 className="display-4 display-md-2 mt-3">
              <span className="bold">eLegal Code Academy</span>
            </h1>
            <p className="lead bold text-primary">
              Der Zero-to-Hero Programmierkurs für Juristen.
            </p>

            {/* <p className="lead">
              Besides its beautiful design. Laapp is an incredibly rich core
              framework for you to showcase your App.
            </p> */}

            <nav className="nav my-5">
              <a
                className="btn btn-rounded btn-alternate mr-2 mr-md-5"
                onClick={() => navigate('/lesson/intro')}
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  Loslegen{' '}
                  <FontAwesomeIcon
                    icon={['fas', 'long-arrow-alt-right']}
                    className="ml-2"
                  />
                </div>
              </a>
            </nav>
          </Col>

          <Col md="6">
            <Terminal lines={termLines} interval={40} white />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Heading;
