import { useParams } from 'react-router';
import { Card, Button, Row, Col } from 'react-bootstrap';

export const AlbumView = ({ albums }) => {
  if (!albums.length) {
    return <div>Loading...</div>;
  }

  // get the id from the path routes params
  const { id } = useParams();

  const album = albums.find((album) => {
    return album.id === id;
  });

  if (!album) {
    return <div>It seems this album doesn't exist in our library.</div>;
  }

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col sm={4}>
            <Card.Img src={album.image}></Card.Img>
          </Col>
          <Col sm={8}>
            <Card.Title>{album.name}</Card.Title>
            <Card.Subtitle>{album.artist}</Card.Subtitle>
            <Card.Text>Release Date: {album.releaseDate}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
