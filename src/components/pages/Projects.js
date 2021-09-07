import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project1 from '../styles/images/2.png';
import Project2 from '../styles/images/1.png';
import Project3 from '../styles/images/3.png';
import '../styles/projects.css';
import { Card, CardGroup, Row, Button } from 'react-bootstrap';

export default function Projects() {
  return (
<div className="page">
<Row lgxx={3} className="g-3">
<CardGroup>
  <Card>
    <Card.Img className="one" variant="top" src={ Project1 } />
    <Card.Body>
      <Card.Title>Meet Up!</Card.Title>
      <Card.Text>
        An app designed for a user to connect with other users about personally orginized events.
      </Card.Text>
      <Button href="https://uta-meet-up.herokuapp.com/" variant="primary">Link to site!</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Sequelize/Handlebars</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Project2 } />
    <Card.Body>
      <Card.Title>CryptoCorner</Card.Title>
      <Card.Text>
        An educational site for the beginner Crypto trader. Uses 3rd Party API's for realtime Crypto information
      </Card.Text>
      <Button href="https://glenhood.github.io/Project-1/" variant="primary">Link to site!</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">JavaScript/API</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={ Project3 } />
    <Card.Body>
      <Card.Title>Band Mates</Card.Title>
      <Card.Text>
        A social media platform that connects musicians with other musicians, looking to either start a band or perform at a gig.
      </Card.Text>
      <Button href="https://band--mates.herokuapp.com/" variant="primary">Link to site!</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">React</small>
    </Card.Footer>
  </Card>
</CardGroup>
</Row>
</div>
  )}
