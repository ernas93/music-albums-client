import { useCallback, useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { format } from 'date-fns';

const formatUtc = (utcDate) => {
  if (!utcDate) {
    return '';
  }
  return format(new Date(utcDate), 'yyyy-MM-dd');
};

export const EditAlbumModal = ({ show, onClose, album }) => {
  const [artist, setArtist] = useState(album.artist);
  const [albumName, setAlbumName] = useState(album.name);
  const [imageUrl, setImageUrl] = useState(album.image);
  const [releaseDate, setReleaseDate] = useState(formatUtc(album.releaseDate));

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    const data = {
      album_name: albumName,
      artist_name: artist,
      release_date: releaseDate,
      image_url: imageUrl,
    };

    fetch(`http://localhost:3000/albums/${album.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('response', response);
          return response.json();
        } else {
          alert('Failed to add new album!');
        }
      })
      .then((album) => {
        if (album) {
          window.location.reload();
        }
      });
  });

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {album.albumName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="artist">
            <Form.Label>Artist: </Form.Label>
            <Form.Control
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
              minLength="1"
            />
          </Form.Group>
          <Form.Group controlId="albumName">
            <Form.Label>Album name: </Form.Label>
            <Form.Control
              type="text"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
              required
              minLength="1"
            />
          </Form.Group>
          <Form.Group controlId="imageUrl">
            <Form.Label>Album Cover Image URL: </Form.Label>
            <Form.Control
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="releaseDate">
            <Form.Label>Release Date: </Form.Label>
            <Form.Control
              type="date"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
