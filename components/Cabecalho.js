import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink, } from 'react-bootstrap'

function Cabecalho() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="../anime">Animes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../anime">Animes</Nav.Link>
            <Nav.Link href="../anime/generos">Gêneros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Cabecalho;