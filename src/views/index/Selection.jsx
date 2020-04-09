import React from "react";
import { Container } from "reactstrap";
import DemoCard from "./DemoCard.jsx";

class Selection extends React.Component {
  renderDemos = () => {
    let demos = [];

    for (let i = 1; i <= 3; i++) {
      demos.push(
        <div className="col-sm-6 col-md-4" key={i}>
          <DemoCard demo={i} />
        </div>
      );
    }

    return demos;
  };

  render() {
    return (
      <section className="section" id="demos">
        <Container fluid={true} className="bring-to-front">
          <div className="section-heading text-center">
            <h2 className="heading-line">Pick a Demo</h2>
            <p className="lead text-muted">
              Laapp comes with multiple demos, choose the one you want to give a
              try.
            </p>
          </div>

          <div className="row gap-y">{this.renderDemos()}</div>
        </Container>
      </section>
    );
  }
}

export default Selection;
