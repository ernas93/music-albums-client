import { useCallback, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddAlbumModal } from '../add-album-modal/add-album-modal';

export const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  });

  return (
    <Navbar
      className="justify-content-between"
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand as={Link} to="/">
        Music Albums
      </Navbar.Brand>
      <Button onClick={toggleModal}>Add new Album</Button>
      <AddAlbumModal show={showModal} onClose={toggleModal}></AddAlbumModal>
    </Navbar>
  );
};
