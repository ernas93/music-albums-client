import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Music Albums
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
