import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-center">
        <Navbar.Brand>
          <img
            src="https://logo.clearbit.com/clearbit.com"
            alt="Logo de la empresa"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
