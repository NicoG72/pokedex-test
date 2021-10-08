import "./listaPokemon.css";
import "./listaPokemon.sass";
import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { UseFetch } from "../components/api/UseFetch";
import { FormPokemon } from "../components/Pokemon/Formulario/FormPokemon";

const ListaPokemon = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  cargando ? console.log(cargando) : console.log(data.results);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const next = () => {
    setUrl(data.next);
    scrollToTop();
  };

  const prev = () => {
    if (data.prev === null) {
    } else {
      setUrl(data.previous);
      scrollToTop();
    }
  };

  return (
    <>
      <section className="bg-dark text-center text-light py-2">
        <h1>Pokedex</h1>
      </section>
      <Container className=" d-flex flex-column my-3 align-items-center">
        <img
          src={process.env.PUBLIC_URL + "pokmeonFoot.png"}
          alt="Logo Pokemon"
          className="w-75 mb-3"
        />
        {cargando ? (
          <h1></h1>
        ) : (
          <FormPokemon results={data.results}></FormPokemon>
        )}
      </Container>
      <div className="mb-4 text-center ">
        <Button
          variant="dark"
          className="p-2 text-light w-25 btnPulse"
          onClick={() => setUrl(data.previous)}
        >
          <h4>{"<<"}</h4>
        </Button>
        <Button
          variant="dark"
          className="p-2 text-light w-25 btnPulse mx-2"
          onClick={next}
        >
          <h4>{">>"}</h4>
        </Button>
      </div>
    </>
  );
};

export default ListaPokemon;
