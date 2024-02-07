import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ReusableCard = ({ className,title, content , imageUrl }) => {
  return (
    <Card>
    {imageUrl && <Card.Img variant="top" src={imageUrl} />}
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{content}</Card.Text>
    </Card.Body>
  </Card>
  );
};

export default ReusableCard;
