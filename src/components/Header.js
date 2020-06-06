import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {UncontrolledTooltip} from "reactstrap";

class Header extends Component {

  render(){
    return(
      <>
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require("../assets/images/logo.png")}
              width="30"
              height="30"
              className="d-inline-block align-top offset-1"
            />{' '}
            Wolfenden Hall
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Nostalgia</NavDropdown.Item>
                <NavDropdown.Item href="/Gallery/events">Events</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Art</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Social Work</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link href="#fbLink" id="fbtooltip">
                  <i className="fa fa-facebook-square fa-lg" />
                  <span class="nav-link-inner--text d-lg-none ml-2">Facebook</span>
                </Nav.Link>
                <UncontrolledTooltip delay={0} target="fbtooltip">
                    Like us on Facebook
                </UncontrolledTooltip>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#emailLink" id="instatooltip">
                  <i className="fa fa-google fa-lg" />
                  <span class="nav-link-inner--text d-lg-none ml-2">Google</span>
                </Nav.Link>
                <UncontrolledTooltip delay={0} target="instatooltip">
                    Connect us on Google
                </UncontrolledTooltip>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#twitterLink" id="tweettooltip">
                  <i className="fa fa-twitter-square fa-lg" />
                  <span class="nav-link-inner--text d-lg-none ml-2">Twitter</span>
                </Nav.Link>
                <UncontrolledTooltip delay={0} target="tweettooltip">
                    Follow us on Twitter
                </UncontrolledTooltip>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default Header;