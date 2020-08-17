import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

class Header extends Component {

  render(){
    return(
      <>
        <Navbar bg="light" variant="light" expand="md">
          <Navbar.Brand >
            <img
              alt=""
              src={require("../assets/images/logo.png")}
              width="30"
              height="30"
              className="d-inline-block align-top offset-1"
            />{' '}
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Gallery/nostalgia">Nostalgia</NavDropdown.Item>
                <NavDropdown.Item href="/Gallery/socialWork">Social Work</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default Header;
