import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home(){
  return(
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={require('../assets/images/WolfWall.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={require('../assets/images/Wolf2.jpg')}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          margin="auto"
          src={require('../assets/images/wolf3.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Jumbotron className="align-self-center">
    <div className="container">
      <div className="row row-header">
        <div className="col-12 col-sm-6">
          <h1>Wolfenden Hall</h1>
          <p>WOLF WOLF WOLF!!!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nobis cumque illo earum repellat delectus nostrum dolor! Nobis cum, minima nesciunt, consequuntur animi deleniti voluptas necessitatibus excepturi sint neque eos!</p>
        </div>
      </div>
      </div>
    </Jumbotron>
    </>
  );
}

export default Home;