
import React from 'react';
import { Card } from 'react-bootstrap';

interface HobbyCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ title, description, imageSrc }) => {
  return (
    <Card className="mb-3 hobbies-card " style={{ width: '18==rem' }}>
      <Card.Img className="hobby-pic" variant="top" src={imageSrc} />
      <Card.Body >
        <Card.Title className="hobby-title" >{title}</Card.Title>
        <Card.Text className="hobby-text" >{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HobbyCard;