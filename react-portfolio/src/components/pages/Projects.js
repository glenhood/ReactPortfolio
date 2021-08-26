import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project1 from '../styles/images/2.png';
import Project2 from '../styles/images/me.jpeg';
import Project3 from '../styles/images/me.jpeg';
import Project4 from '../styles/images/me.jpeg';
import Project5 from '../styles/images/me.jpeg';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Blog() {
  return (
<Card style={{ width: '500px' }}>
  <Card.Img variant="top" src= { Project1 } />
  <Card.Body>
    <Card.Title>Meet Up!</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Link to site!</Button>
  </Card.Body>
</Card>
  );
}
<Card style={{ width: '500px' }}>
  <Card.Img variant="top" src= { Project1 } />
  <Card.Body>
    <Card.Title>Meet Up!</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Link to site!</Button>
  </Card.Body>
</Card>
