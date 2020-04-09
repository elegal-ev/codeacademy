import React from "react";
import { Container, Row, Col } from "reactstrap";

const renderFeatures = () => {
  let features = [];
  const elements = [
    {
      icon: "pe-7s-diamond",
      title: "Unsere Besonderheit",
      description:
        "Zu jeder Einheit des Kurses gibt Tutorien mit allen Teilnehmern, bei denen dir Tutoren zur Seite steht und alle fragen direkt vor Ort beantwortet und bei jedem Problem helfen."
    },
    {
      icon: "pe-7s-tools",
      title: "Der Erfolgsfaktor",
      description:
        "Wir wissen, wie wichtig Erfolgserlebnisse sind, um am Ball zu bleiben. Und wir glauben, dasssie noch besser werden, wenn man sie mit anderen teilt! Deswegen bildet der Austausch zwischen den Teilehmern und den Tutoren einen wichitgen Teil. "
    },
    {
      icon: "pe-7s-light",
      title: "Das Abschlussprojekt",
      description:
        "Nach der letzten Einheit ist noch lange nicht Schluss! Wir möchten gerne im Anschluss an dieLerneinheiten noch ein kleines Projekt mit dir auf die Beine stellen, denn wie heißt es so schön: Learning by doing 😁."
    }
  ];

  elements.forEach((element, i) => {
    features.push(
      <Col md="4" className="py-4 rounded shadow-hover">
        <i className={`pe ${element.icon} pe-3x mb-3 text-primary`} />
        <h5 className="bold">{element.title}</h5>
        <p>{element.description}</p>
      </Col>
    );
  });

  return features;
};

const Features = () => {
  return (
    <section id="features" className="section features">
      <Container>
        <div className="section-heading text-center">
          <h2 className="heading-line">Unsere Philosophie</h2>
          <p className="lead text-muted">
          Wir stellen mit diesem Kurs nicht nur Übungen zum Lernen von Python zur Verfügung,sondern auch wir stellen uns währenddessen an deine Seite. Denn unserer Meinung nachbedarf es mehr als Erklärungen und praktische Übungen, man brauch Menschen, die die selbeLeidenschaft teilen.
          </p>
        </div>

        <Row className="gap-y text-center text-md-left">{renderFeatures()}</Row>
      </Container>
    </section>
  );
};

export default Features;
