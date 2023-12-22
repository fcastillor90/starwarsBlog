import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const SinglePlanet = () => {
    
  const planet = {
    name: 'Tatooine',
    description: 'Tatooine is a harsh desert world in a binary star system.',
    climate: 'Arid',
    terrain: 'Desert',
    population: '200000',
    image: 'https://placehold.co/300x400'
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={planet.image} fluid />
        </Col>
        <Col md={6}>
          <h1>{planet.name}</h1>
          <p>{planet.description}</p>
          <div>
            <strong>Climate:</strong> {planet.climate}
            <br />
            <strong>Terrain:</strong> {planet.terrain}
            <br />
            <strong>Population:</strong> {planet.population}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SinglePlanet;