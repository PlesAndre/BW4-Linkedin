import React from "react";

// Importo gli stili di react-bootstrap
import { Col, Image, Row, Container } from "react-bootstrap";

// Importo il Link dal router-dom, su App.js dichiarato le Routes
import { Link } from "react-router-dom";

// Importo le immagini per i 4 utenti
import FemaleImg from "../../assets/img/female.png";
import MaleImg from "../../assets/img/male.png";

export default function UsersPage() {
  // ID univoci dei nostri "account"
  const usersID = {
    jessica: "674f52c122ca0300154884b1",
    carmine: "6752096f7246ad0015c51593",
    gabriele: "674f538122ca0300154884b2",
    andrei: "674e072574b77d0015d3f076",
  };

  return (
    <Container className="mt-5 pt-2">
      <Row className="text-center mt-5 g-5 vh-75">
        <Col xs={12} md={6}>
          {/* Viene passato l'ID associato a Jessica */}
          <Link to={`/profile/${usersID.jessica}`}>
            <Image src={FemaleImg} roundedCircle />
          </Link>
          <p className="mt-4">Jessica Fraino</p>
        </Col>

        <Col xs={12} md={6}>
          {/* Viene passato l'ID associato ad Andrei */}
          <Link to={`/profile/${usersID.andrei}`}>
            <Image src={MaleImg} roundedCircle />
          </Link>
          <p className="mt-4">Plescan Andrei Leonard</p>
        </Col>

        <Col xs={12} md={6}>
          {/* Viene passato l'ID associato a Gabriele */}
          <Link to={`/profile/${usersID.gabriele}`}>
            <Image src={MaleImg} roundedCircle />
          </Link>
          <p className="mt-4">Gabriele Aloi</p>
        </Col>

        <Col xs={12} md={6}>
          {/* Viene passato l'ID associato a Carmine */}
          <Link to={`/profile/${usersID.carmine}`}>
            <Image src={MaleImg} roundedCircle />
          </Link>
          <p className="mt-4">Carmine Berardi</p>
        </Col>
      </Row>
    </Container>
  );
}
