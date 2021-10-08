import "./formStyles.css";
import React, { useState } from "react";
import { Container, Form, Row, Col, FormControl } from "react-bootstrap";
import { CardPokemon } from "../Card/CardPokemon";

export const FormPokemon = ({ results }) => {
  const [busqueda, setBusqueda] = useState("");
  return (
    <>
      <Container>
        <h1>{results.name}</h1> {results.name}
        <Form className="formPokemon p-4 ovalo mb-3">
          <Form className="d-flex mb-4">
            <FormControl
              type="text"
              placeholder="Search"
              className=" py-2 ovalo"
              onChange={(e) => {
                setBusqueda(e.target.value);
              }}
            />
          </Form>
          <Row>
            {results
              .filter((buscar) => {
                if (busqueda === "") {
                  return buscar;
                } else if (
                  buscar.name
                    .toLowerCase()
                    .includes(busqueda.toLocaleLowerCase())
                ) {
                  return buscar;
                }
              })
              .map((p) => (
                <Col xs={12} md={4} key={p.name}>
                  <CardPokemon url={p.url}></CardPokemon>
                </Col>
              ))}
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default FormPokemon;
