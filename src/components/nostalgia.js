import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
// import { Loading } from "./LodingComponent";
// import { baseUrl } from '../shared/baseUrl';
// import { Fade, Stagger } from 'react-animation-components';

function Nostalgia(props) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/events">Events</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Nostalgia</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Nostalgia</h3>
          <h6>A Wolfenden Hall, IIEST, Shibpur initiative</h6>
          <hr />
        </div>
      </div>
      <Jumbotron>
        <div className="row row-content">
          <div className="col-12 col-md">
            <h2>About</h2>
            <p>
              Nostalgia is a non-profit, non-political, non-communal, secular
              organisation which has been engaged in various forms of
              humanitarian, social service activities since 2012. With pledge of
              helping others all the members of Nostalgia are committed to serve
              without any distinction of caste, religion or race. Nostalgia has
              started its journey in 2012 with initiative of few alumni of
              Wolfenden Hall of IIEST, Shibpur (erstwhile known as Bengal
              Engineering College i.e. B. E. College, Bengal Engineering and
              Science University i.e. B. E. S. U) to get together at our beloved
              hall where we spent the most valuable 1-2 years of our lives and
              helping the Hall staff who were/weren’t under payroll of
              University authority by distributing winter clothes. We have grown
              with numbers of members and activities we are involving ourselves.
              We are currently involved in social causes like relief support to
              disaster affected areas and to the martyred army personnel,
              financial support to the university students, helping financially
              for medical emergencies of students/ the needy ones from our
              university, tree plantation etc.
            </p>
            <h2>Objective</h2>
            <p>
              Nostalgia was formed with some noble causes and hence if we
              summarise our objectives, it’ll be,
            </p>
            <ul>
              <li>
                To get involved in humanitarian and social service activities.
              </li>
              <li>
                To provide support to the distressed people irrespective of men,
                women, child, race, caste, religion and also to nature.
              </li>
              <li>
                To support the victim of any calamity by involving directly and
                providing the required resources.
              </li>
              <li>Helping out financially weak students of our alma mater.</li>
              <li>
                To get together yearly in our beloved hall to cherish the old
                memories.
              </li>
            </ul>
            <h2>Activities</h2>
            <p>So far Nostalgia is involved in below activities,</p>
            <ul>
              <li>
                Educational Services<br></br>
                By providing scholarships to the financially backward students
                from the university (IIEST, Shibpur).
              </li>
              <li>
                Relief and Rehabilitation Services<br></br>
                Nostalgia conducts relief and rehabilitation operations during
                man-made/ natural disasters like cyclone, flood, fire, terrorist
                attack, earthquake/ landslide etc. Rehabilitation services
                include, providing food and essentials, repairing/
                reconstruction of houses etc.
              </li>
              <li>
                Medical Services
                <br></br>
                By providing scholarships to the financially backward students
                from the university (IIEST, Shibpur).
              </li>
            </ul>
          </div>
          <div className="col-12">
            <Card>
              <CardBody className="bg-faded">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    It's not just a Hall of residence in fact-{" "}
                  </p>
                  <footer className="blockquote-footer">
                    <cite>
                      “It is a way of life, a philosophy... a place of
                      enthusiasm and vigour.”
                    </cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Nostalgia;
