import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
// import { Loading } from "./LodingComponent";
// import { baseUrl } from '../shared/baseUrl';
// import { Fade, Stagger } from 'react-animation-components';


function About(props){
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <Jumbotron>
            <div className="row row-content">
                <div className="col-12 col-md">
                    <h2>Our History</h2>
                    <p>The Wolfenden Hall, named after Prof Richard Wolfenden stands tall since its inception in1953.The structure contains 2 storied building with 3 separate wings- Oval having 12 rooms, Dhobi having 14 rooms and Hitton having 12 rooms  on each floor accommodating 100 odd boarders (~ Wolves) which contain final and pre-final year students. Single seater accomodation with lavish food acts as an addon to the great memories that students make here while their stay. Besides the hall boasts of its great lineage of alumnus in the form of their own association -Nostalgia the only hall to have one. Always considered as a hall not for the studious type the hall has produced great alumnies in vast fields and has been a home of new initiatives for everything.It has always been the preferred hostel for people who had left a mark or wanted to make a mark. It has been a long journey since 1953 when the hall had a wooden coal fired kitchen. The water for cooking was all the way fetched from Bidisha lake as the groundwater was too saline to cook. The hall witnessed student canteens which were 3 in number one for each floor to 5 and now none.</p>
                    <p>As far as infrastructural development is concerned the hall now has table chair sitting arrangement in the mess. The wooden coal cooking system was developed  to LPG Gas cylinders after the 2000's. During the era of the 1970s there was a radio in the present games room, which got upgraded to black and white television in the 1990's ,to coloured television in early 2000’s and finally an LCD around 2010. The newly furnished washrooms and washing machine  makes you lazy enough to muse on the great scenery in the morning and evening- a wonderful display of nature at its work-only if you wake up early. </p>
                    <p>The cozy winter morning and the stunning view of the Oval is something to cherish for a lifetime. The exact location of the hall away from the congest amongst trees, the tranquility; Hitton dwellers wake up to the bell of the clocktower.
Table tennis, short pitch cricket, basketball, volleyball, football being the most prevalent outdoor games it is not surprising that you would find teams for playing indoor games like chess, table tennis, fifa just to name a few. The boarders still keep the gaming culture of the hall alive.</p>
                    <p>As far as the boarders are concerned it had a plethora of expertes since the olden days like Ashok Mukherjee 1976 batch and University record holder of Athletics, Amit Samanto 1976 batch Boxing specialist, Soumitra Sarkar Center Forward for the University in the olden days to Jahir Abbas the present day WBCS officer, besides the mundane a lot of corporates in all the firms across the globe.</p>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">It's not just a Hall of residence in fact- </p>
                                <footer className="blockquote-footer"><cite>“It is a way of life, a philosophy... a place of enthusiasm and vigour.”</cite>
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

export default About;    