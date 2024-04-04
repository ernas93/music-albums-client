import { AlbumCard } from '../album-card/album-card';
import { Row } from 'react-bootstrap';

export const AlbumList = ({ albums }) => {
  return (
    <Row className="justify-content-md-center">
      {albums.map((album) => {
        return <AlbumCard album={album} key={album.id}></AlbumCard>;
      })}
    </Row>
  );
};
