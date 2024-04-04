import { useCallback, useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

export const AddAlbumModal = ({ show, onClose }) => {
  const [artist, setArtist] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    const data = {
      album_name: albumName,
      artist_name: artist,
      release_date: releaseDate,
      image_url: imageUrl,
    };

    fetch('http://localhost:3000/album', {
      method: 'POST',
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
        <Modal.Title>Add new Album</Modal.Title>
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
