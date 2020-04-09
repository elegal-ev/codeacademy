import React from "react";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";

const PowerfulCard = props => {
  return (
    <Fade top {...props.animation}>
      <Tilt options={{ max: 20, glare: true, maxGlare: 0.4 }}>
        <div className="card border-0 shadow mb-5 tilt">
          <div className="card-body py-5 px-4">
            <div className="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
              <i className={`icon m-0 pe pe-7s-${props.icon} pe-3x`} />
            </div>

            <h4 className="bold mb-5">{props.title}</h4>

            <p className="text-muted lead">{props.description}</p>
          </div>
        </div>
      </Tilt>
    </Fade>
  );
};

export default PowerfulCard;
