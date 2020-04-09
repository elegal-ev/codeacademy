import React from "react";
import { Container } from "reactstrap";

class Palette extends React.Component {
  render() {
    return (
      <section className="section mt-6n">
        <Container className="py-0">
          <a
            href="https://www.pantone.com/color-intelligence/color-of-the-year/color-of-the-year-2019"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-hover"
          >
            <div className="card shadow-lg mb-5 align-items-center">
              <div className="card-body media align-items-center">
                <img
                  src={require("assets/img/PCI-coy-2019-living-coral-16-1546-logo.jpg")}
                  className="mr-3"
                  alt="Pantone - Living Coral"
                />

                <div className="media-body">
                  <h5 className="mb-0">
                    <span className="text-uppercase bold">pantone 16-1564</span>
                    Living Coral
                  </h5>
                  <p className="bold accent mt-0">Color of the year 2019</p>
                  <p>Click here to know more</p>
                </div>
              </div>
            </div>
          </a>
        </Container>
      </section>
    );
  }
}

export default Palette;
