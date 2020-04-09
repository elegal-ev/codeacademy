import React from 'react';
import {
  Container,
  Row,
  Col,
  UncontrolledCollapse,
} from 'reactstrap';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

const questions = [
  {
    question: 'What does the package include?',
    answer:
      'When you buy Dashcore, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.',
  },
  {
    question:
      'What is the typical response time for a support question?',
    answer:
      'Since you report us a support question we try to make our best to find out what is going on, depending on the case it could take more or les time, however a standard time could be minutes or hours.',
  },
  {
    question: 'What do I need to know to customize this template?',
    answer:
      'Our documentation give you all you need to customize your copy. However you will need some basic web design knowledge (HTML, Javascript and CSS)',
  },
  {
    question: 'Can I suggest a new feature?',
    answer:
      "Definitely <span className='bold'>Yes</span>, you can contact us to let us know your needs. If your suggestion represents any value to both we can include it as a part of the theme or you can request a custom build by an extra cost. Please note it could take some time in order for the feature to be implemented.",
  },
];

const Faqs = () => {
  return (
    <section className="section faqs-dd bg-light edge top-left">
      <div className="shapes-container">
        <div className="absolute icon">
          <Fade top left>
            <FontAwesomeIcon icon={['fas', 'question']} />
          </Fade>
        </div>
      </div>

      <Container>
        <div className="section-heading text-center">
          <h2 className="heading-line">Frequently Asked Questions</h2>
          <p className="lead">
            Want to know more about our services?
          </p>
        </div>

        <Row>
          <Col lg="8" className="mx-lg-auto">
            {questions.map((faq, i) => (
              <Fade bottom key={i}>
                <div
                  className="card shadow-box shadow-hover mb-3"
                  key={i}
                >
                  <div className="card-header py-3">
                    <Link
                      to="#"
                      className="card-title collapsed"
                      id={`toggler-${i}`}
                    >
                      {faq.question}
                    </Link>
                  </div>

                  <UncontrolledCollapse toggler={`#toggler-${i}`}>
                    <div className="card-body">{faq.answer}</div>
                  </UncontrolledCollapse>
                </div>
              </Fade>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
