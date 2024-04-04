import { useCallback, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export const DeleteAlbum = ({ album }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback((e) => {
    setShowModal(!showModal);
  });

  const handleDeleteAlbum = () => {
    fetch(`http://localhost:3000/albums/${album.id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        window.location.reload();
      } else {
        alert('something went wrong.');
      }
    });
  };

  return (
    <>
      <Button variant="danger" onClick={toggleModal}>
        Delete Album
      </Button>
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this album permanantly?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDeleteAlbum}>
            Yes
          </Button>
          <Button variant="secondary" onClick={toggleModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
