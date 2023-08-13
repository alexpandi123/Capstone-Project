import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SideBarMenu from "./Sidebar";

export default function Navigation() {
  return (
    <SideBarMenu />
    // <Navbar expand="lg" className="bg-dark-subtle">
    //   <Container>
    //         <Navbar.Brand href="/">Weapons Wiki</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //         <Navbar.Collapse id="responsive-navbar-nav">
    //           <Nav className="">
    //               <Nav.Link as={Link} to="/add-new-weapon">Add a new Weapon</Nav.Link>
    //               <Nav.Link as={Link} to="/user-sign-in">Sign in</Nav.Link>
    //           </Nav>
    //         </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};
