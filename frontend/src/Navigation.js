import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-dark-subtle">
      <Container>
            <Navbar.Brand href="/">Weapons Wiki</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link as={Link} to="/add-new-weapon">Add a new Weapon</Nav.Link>
                  <Nav.Link as={Link} to="/add-new-weapon">Add a new Weapon</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};