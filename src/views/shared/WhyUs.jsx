import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const renderFeatures = () => {
  let features = [];
  const items = [
    {
      name: 'Integrations',
      icon: 'plug',
      description:
        'Aut debitis deserunt ea explicabo hic id incidunt, minus',
    },
    {
      name: 'Marketing',
      icon: 'heart',
      description:
        'Aliquam amet assumenda debitis dicta distinctio eaque enim',
    },
    {
      name: 'Support',
      icon: 'headphones',
      description:
        'Consequatur doloremque illum libero nam. Hic, vitae?',
    },
  ];

  items.forEach((f, i) => {
    features.push(
      <li className="list-item" key={i}>
        <div className="media align-items-center">
          <div className="icon-shape mr-3">
            <div className="shape shape-pipes" />
            <FontAwesomeIcon
              icon={['fas', f.icon]}
              className="icon fa-3x text-alternate"
            />
          </div>

          <div className="media-body">
            <h5 className="bold">{f.name}</h5>
            <p className="my-0">{f.description}</p>
          </div>
        </div>
      </li>,
    );
  });

  return features;
};

const WhyUs = () => {
  return (
    <section className="section why-choose-us">
      <div className="shapes-container">
        <div className="pattern pattern-dots" />
      </div>

      <div className="container pb-8 bring-to-front">
        <div className="section-heading text-center">
          <h2 className="heading-line">
            Why you should choose Laap?
          </h2>
          <p className="text-muted lead mx-auto">
            Laapp is designed to provide you with the last trends in
            web design. It'll help you to focus on your product,
            launch your website faster and reach more customer.
          </p>
        </div>

        <div className="row gap-y">
          <div className="col-md-6">
            <h4 className="bold text-alternate">
              It all start by choosing the right tools
            </h4>
            <p className="text-muted lead mb-5">
              When you're looking for a template you want it to
              stand-out. Laapp comes with many customizable
              components.
            </p>

            <ul className="list-unstyled why-icon-list">
              {renderFeatures()}
            </ul>

            <hr className="my-5" />
            <div className="text-center text-md-left">
              <Link to="#!" className="btn btn-primary text-contrast">
                Know More
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className="rotated-mockups device-twin">
              <div className="browser absolute shadow-lg">
                <img
                  src={require('assets/img/screens/tablet/1.png')}
                  alt="..."
                />
              </div>

              <div className="front iphone light">
                <div className="screen">
                  <img
                    src={require('assets/img/screens/app/1.png')}
                    alt="..."
                  />
                </div>

                <div className="notch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
