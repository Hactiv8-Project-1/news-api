import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";


function NavBar() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Indonesia</Nav.Link>
            <Nav.Link as={Link} to='/programming'>Programming</Nav.Link>
            <Nav.Link as={Link} to='/covid-19'>Covid-19</Nav.Link>
            <Nav.Link as={Link} to='/saved'>Saved</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Cari</Button>
          </Form>
        </Container>
        </Navbar>
        </div>
    );
}

export default NavBar;