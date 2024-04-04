import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AlbumCard = ({ album }) => {
  return (
    <Col sm={6} md={4} lg={3}>
      <Card className="h-100">
        <Card.Body>
          <Card.Img src={album.image}></Card.Img>
          <Card.Title>{album.name}</Card.Title>
          <Card.Text>Artist: {album.artist}</Card.Text>
          <Link to={`/album/${album.id}`}>
            <Button variant="link">See details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
