import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DemoCard = (props) => {
  const demo = props.demo;

  return (
    <div className="card card-demo card--blog shadow-box border-0">
      <div className="card-body d-flex flex-column flex-lg-row align-items-center">
        <h4 className="card-title mb-3 mb-lg-0 text-capitalize">
          Alternative {demo}
        </h4>

        <nav className="btn-group ml-lg-auto">
          <Link
            to={`alter-${demo}`}
            className="btn btn-alternate btn-rounded px-3 shadow-none"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={['fas', 'desktop']}
              className="icon"
            />
            <span className="demo-link-text">Demo</span>
          </Link>
        </nav>
      </div>

      <figure className="preview-overlay m-0">
        <div className="preview-pane">
          <div className="preview-page">
            <img
              className="card-img-bottom img-responsive"
              src={require(`assets/img/demo/screen/${demo}.png`)}
              alt=""
            />
          </div>
        </div>
      </figure>
    </div>
  );
};

export default DemoCard;
