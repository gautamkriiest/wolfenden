import React, {Component} from 'react';
import {Navbar,NavbarBrand,Nav,NavbarToggler,NavItem,Collapse,Jumbotron} from 'reactstrap';
// import {NavLink} from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <>
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">Wolfenden Hall</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Wolfenden Hall</h1>
              <p>WOLF WOLF WOLF!!!</p>
            </div>
          </div>
         </div>
        </Jumbotron>
      </>
    );
  }
}
export default Header;
