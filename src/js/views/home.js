import React, { useContext, useEffect } from "react";
import { Card, CardGroup, Container, Button } from 'react-bootstrap';
import { Context } from '../store/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../../styles/home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchPeople();
    actions.fetchPlanets();
  }, []);

  return (
    <Container>
      <h1>List of Characters</h1>
      <div className="card-scroll-container">
        <CardGroup className="card-group">
          {store.peopleList.map((item, index) => (
            <Card key={index} className="card-item">
              <div className="card-img-container">
                <Card.Img className="card-img" variant="top" src="https://placehold.co/600x400" alt="" />
              </div>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <strong>Gender:</strong> {item.gender}
                  <br />
                  <strong>Hair Color:</strong> {item.hair_color}
                  <br />
                  <strong>Eye Color:</strong> {item.eye_color}
                </Card.Text>
                <Link to={`/single-character/${item.name}`} className="btn btn-primary">Learn More</Link>
                <Button
                  variant="danger"
                  className="ml-2"
                  onClick={() => actions.setFavorites(item.name)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>

      <h1>List of Planets</h1>
      <div className="card-scroll-container">
        <CardGroup className="card-group">
          {store.planetList.map((item, index) => (
            <Card key={index} className="card-item">
              <div className="card-img-container">
                <Card.Img className="card-img" variant="top" src="https://placehold.co/600x400" alt="" />
              </div>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <strong>Climate:</strong> {item.climate}
                  <br />
                  <strong>Terrain:</strong> {item.terrain}
                  <br />
                  <strong>Population:</strong> {item.population}
                </Card.Text>
                <Link to={`/single-planet/${item.name}`} className="btn btn-primary">Learn More</Link>
                <Button
                  variant="danger"
                  className="ml-2"
                  onClick={() => actions.setFavorites(item.name)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>
    </Container>
  );
};