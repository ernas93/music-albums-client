import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AlbumCard = ({ album }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Img src={album.image}></Card.Img>
        <Card.Title>{album.name}</Card.Title>
        <Card.Text>Artist: {album.artist}</Card.Text>
        <Card.Text>Release Date: {album.releaseDate}</Card.Text>
        <Link to={`/album/${album.id}`}>
          <Button variant="link">See details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
