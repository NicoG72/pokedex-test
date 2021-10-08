import "./stylesFoot.css";
import React from "react";
import { Row, Col, Image, ListGroup, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="text-light py-3 Pie">
      <Container fluid>
        <Row>
          <Col md={12}>
            <Row>
              <Col xs={12} md={4}>
                <Image
                  src={process.env.PUBLIC_URL + "pokmeonFoot.png"}
                  alt="PokemonApi Logo"
                />
              </Col>
              <Col xs={12} md={4} className="text-center">
                <h3>Pokedex:</h3>
                <p>
                  Bienvenido a la nueva experiencia de consulta de Pokedex.
                  Disfruta: Buscando, Investigando, acerca de los miles de
                  pokemons y las difierentes variedades de los mismos.
                  <hr />
                  Diviertete tambien encontrando nuevos Pokemons
                  <hr />
                  <a
                    href="https://pokeapi.co/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light"
                  >
                    <h4>https://pokeapi.co/</h4>
                  </a>
                </p>
              </Col>
              <Col xs={12} md={4}>
                <h3>Visitanos en nuestras Redes Sociales:</h3>
                <Row>
                  <Col xs={12} md={12}>
                    <a
                      href="https://www.instagram.com/?hl=es-la"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="me-2 turn insta"
                        size="3x"
                      ></FontAwesomeIcon>
                    </a>
                  </Col>
                  <Col xs={12} md={12}>
                    <a
                      href="http://www.facebook.com.ar"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="me-2 turn face"
                        size="3x"
                      ></FontAwesomeIcon>
                    </a>
                  </Col>
                  <Col xs={12} md={12}>
                    <a
                      href="https://twitter.com/?lang=es"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="me-2 turn twit"
                        size="3x"
                      ></FontAwesomeIcon>
                    </a>
                  </Col>
                  <Col xs={12} md={12}>
                    <a
                      href="http://www.youtube.com.ar"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light"
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="me-2 turn u2b"
                        size="3x"
                      ></FontAwesomeIcon>
                    </a>
                  </Col>
                  <Col xs={12} md={12}>
                    <a
                      href="https://web.whatsapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="me-2 turn what"
                        size="3x"
                      ></FontAwesomeIcon>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={12}></Col>
        </Row>
        <p className="text-center">
          &copy; Todos los Derechos reservados. 2021
        </p>
      </Container>
    </div>
  );
};

export default Footer;
