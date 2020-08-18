import React from "react";
import { Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from "react-router-dom";
import { Jumbotron, Nav } from "react-bootstrap";
// import { Loading } from "./LodingComponent";
// import { baseUrl } from '../shared/baseUrl';
// import { Fade, Stagger } from 'react-animation-components';

function About(props) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Events</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Events of Wolfenden Hall</h3>
          <hr />
        </div>
      </div>
      <Jumbotron>
        <div className="row row-content">
          <div className="col-12 col-md">
          <Nav.Link href="/nostalgia">Nostalgia</Nav.Link>
          <Nav.Link href="#">Wolfame</Nav.Link>
          <Nav.Link href="#">Uttran</Nav.Link>
          <Nav.Link href="#">Kholi Puja</Nav.Link>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default About;
