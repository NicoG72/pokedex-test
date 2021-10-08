import "./index.css";
import React from "react";
import { Image, Container, Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <section className="bg-dark text-center text-light py-2">
        <h1>Pagina de Inicio</h1>
      </section>
      <Container className="text-center d-flex justify-content-center mb-3">
        <Row>
          <Col md={12} className="mb-4">
            <Carousel>
              <Carousel.Item interval={1500} className="">
                <img
                  className="d-block contenedor"
                  src={process.env.PUBLIC_URL + "pokeprueba.jpg"}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1500} className="">
                <img
                  className="d-block contenedor"
                  src={process.env.PUBLIC_URL + "pokeprueba.jpg"}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1500} className="">
                <img
                  className="d-block contenedor"
                  src={process.env.PUBLIC_URL + "pokeprueba.jpg"}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="d-flex justify-content-center mb-4" md={12}>
            <Link
              className="redondo shake shadowButton"
              exact={true}
              to="/lista-pokemon"
            >
              <Image
                src={process.env.PUBLIC_URL + "pokebola.png"}
                alt="PokemonApi Logo"
                className="ajustable"
              />
            </Link>
          </Col>
          <Col xs={12} md={8}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae alias accusantium magnam quo ipsum, tempora ea quaerat
              fugit, assumenda ullam quae nulla accusamus laudantium odio
              expedita labore mollitia! Corporis voluptates quae laudantium
              facilis, voluptate ratione odit porro consequuntur voluptatibus
              natus quisquam modi ut ducimus rerum at quam nulla debitis amet a
              atque iusto quod, fugiat rem magni. Eius adipisci, minima,
              excepturi ipsam veritatis accusantium debitis esse atque,
              laboriosam ab labore aut culpa porro cupiditate eligendi
              reprehenderit unde. Explicabo totam illum voluptatem a atque
              quaerat, eius error in odio animi, exercitationem hic, vitae
              officia iusto. Soluta corporis dolor porro, amet quo laborum
              laboriosam, saepe quae iste nesciunt iure repellat! Est ratione
              sapiente ea magnam deleniti voluptatem ex, maiores tempore sequi
              non tenetur vero numquam sint aperiam reiciendis autem architecto
              a quibusdam quo! Autem cumque aperiam voluptatem perferendis, quos
              asperiores fugit at consectetur delectus in est corporis. Quod
              magnam sed rem libero.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img
              className="ajustable"
              src={process.env.PUBLIC_URL + "ImgIlustration2.jpg"}
              alt="Second slide"
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              className=" ajustable"
              src={process.env.PUBLIC_URL + "ImgIlustration1.jpg"}
              alt="Second slide ajustable"
            />
          </Col>
          <Col xs={12} md={8}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              recusandae modi quisquam ab consequuntur tenetur expedita? Ducimus
              molestiae reiciendis vero placeat ad repellat tenetur praesentium
              unde pariatur aliquam perferendis soluta quis sunt, natus animi
              sint sit repellendus. Dignissimos aperiam cupiditate eos incidunt
              vel atque, hic quo aspernatur. Eos, adipisci odio? Sint nulla ea
              optio asperiores omnis, modi harum laudantium doloremque tempora
              soluta tempore sunt quae, maxime reprehenderit atque dolorem
              consequatur? Laboriosam natus aut aliquid quibusdam.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
