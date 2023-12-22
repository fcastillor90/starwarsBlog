import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const SingleCharacter = () => {

  const character = {
    name: 'Luke Skywalker',
    description: 'A hero of the Rebellion against the Empire, Luke Skywalker is a Jedi Knight.',
    gender: 'Male',
    hair_color: 'Blond',
    eye_color: 'Blue',
    image: 'https://placehold.co/300x400'
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={character.image} fluid />
        </Col>
        <Col md={6}>
          <h1>{character.name}</h1>
          <p>{character.description}</p>
          <div>
            <strong>Gender:</strong> {character.gender}
            <br />
            <strong>Hair Color:</strong> {character.hair_color}
            <br />
            <strong>Eye Color:</strong> {character.eye_color}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCharacter;