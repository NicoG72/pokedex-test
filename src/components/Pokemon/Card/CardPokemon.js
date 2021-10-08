import "./cardStyles.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { UseFetch } from "../../api/UseFetch";
import {
  Col,
  Row,
  Card,
  Badge,
  Modal,
  Button,
  ListGroup,
} from "react-bootstrap";

export const CardPokemon = ({ url }) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      {cargando ? (
        <h1>cargando</h1>
      ) : (
        <Card className="cardStyle shadowCard ovalo greyEffect mb-4">
          <Card.Header className="text-light">
            <Row>
              <Col className="pt-1" md={9}>
                <h4>Pokemon: {capitalizarPrimeraLetra(data.name)}</h4>
              </Col>
              <Col md={3} className="d-flex justify-content-end">
                <Button
                  className="circulo border-dark  VerInfo"
                  variant="dark"
                  onClick={handleShow}
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    size="1x"
                  ></FontAwesomeIcon>
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <h3 className="mb-3">
              <Badge bg="dark" className="circulo text-light">
                #{data.id}
              </Badge>
            </h3>
            <div className="circulo bg-light">
              <Card.Img
                src={data.sprites.front_default}
                alt={capitalizarPrimeraLetra(data.name)}
                className="turn "
              />
            </div>
          </Card.Body>
          <Card.Footer className="text-light">
            <Row>
              <Col className="d-flex justify-content-start" md={6}>
                <h4 className="text-dark">Exp: {data.base_experience}</h4>
              </Col>
              <Col md={6} className="d-flex justify-content-end">
                <h4 className="text-dark">Height: {data.height}</h4>
              </Col>
            </Row>
          </Card.Footer>
          <Modal size="lg" show={show} onHide={handleClose} centered>
            <div className="cardStyle">
              <Modal.Header closeButton className="titleModal">
                <Modal.Title>
                  Informacion del Pokemon: {capitalizarPrimeraLetra(data.name)}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col xs={12} md={8}>
                    <div className="bgImg mb-3">
                      <h3 className="p-2 capatransparente"> #{data.id}</h3>
                      <Card.Img
                        src={data.sprites.front_default}
                        alt={`Pokemon: ${capitalizarPrimeraLetra(data.name)}`}
                        className="turn"
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <Col md={12}>
                      <ListGroup>
                        <ListGroup.Item variant="secondary ">
                          <h5>Datos:</h5>
                        </ListGroup.Item>
                        <ListGroup.Item variant="flush">
                          <h6>Name: {capitalizarPrimeraLetra(data.name)}</h6>
                        </ListGroup.Item>
                        <ListGroup.Item variant="flush">
                          <h6>Exp: {data.base_experience}</h6>
                        </ListGroup.Item>
                        <ListGroup.Item variant="flush">
                          <h6>Height: {data.height}</h6>
                        </ListGroup.Item>
                        <ListGroup.Item variant="flush">
                          <h6>Weight: {data.weight}</h6>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col xs={12} md={12} className="mt-3">
                      <ListGroup>
                        <ListGroup.Item variant="secondary ">
                          <h5>Tipo:</h5>
                        </ListGroup.Item>
                        {data.types.map((item) => (
                          <ListGroup.Item>
                            <h6>{capitalizarPrimeraLetra(item.type.name)}</h6>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Col>
                  </Col>
                  <Col xs={12} md={12}>
                    <ListGroup>
                      <ListGroup.Item variant="secondary ">
                        <h5>Habilidades:</h5>
                      </ListGroup.Item>
                      {data.abilities.map((item) => (
                        <ListGroup.Item>
                          <h6>{capitalizarPrimeraLetra(item.ability.name)}</h6>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                </Row>
              </Modal.Body>
            </div>
          </Modal>
        </Card>
      )}
    </div>
  );
};

export default CardPokemon;
