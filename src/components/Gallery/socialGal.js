import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Component } from 'react';
import '../../assets/css/image-gallery.css';
import { BreadcrumbItem , Breadcrumb} from 'reactstrap';
import { Link } from "react-router-dom";


const images = [
    {
      original: require('../../assets/images/Covid-19 + Amphan/1.jpg'),
      thumbnail: require('../../assets/images/Covid-19 + Amphan/1.jpg'),
    },
    {
      original: require('../../assets/images/Covid-19 + Amphan/2.jpg'),
      thumbnail: require('../../assets/images/Covid-19 + Amphan/2.jpg'),
    },
    {
      original: require('../../assets/images/Covid-19 + Amphan/3.jpg'),
      thumbnail: require('../../assets/images/Covid-19 + Amphan/3.jpg'),
    },
    {
        original: require('../../assets/images/Covid-19 + Amphan/4.jpg'),
        thumbnail: require('../../assets/images/Covid-19 + Amphan/4.jpg'),
    },
    {
    original: require('../../assets/images/Covid-19 + Amphan/5.jpg'),
    thumbnail: require('../../assets/images/Covid-19 + Amphan/5.jpg'),
    },
    {
    original: require('../../assets/images/Covid-19 + Amphan/6.jpg'),
    thumbnail: require('../../assets/images/Covid-19 + Amphan/6.jpg'),
    },
    {
    original: require('../../assets/images/Covid-19 + Amphan/7.jpg'),
    thumbnail: require('../../assets/images/Covid-19 + Amphan/7.jpg'),
    },
    {
    original: require('../../assets/images/Covid-19 + Amphan/8.jpg'),
    thumbnail: require('../../assets/images/Covid-19 + Amphan/8.jpg'),
    },
    {
    original: require('../../assets/images/Covid-19 + Amphan/9.jpg'),
    thumbnail: require('../../assets/images/Covid-19 + Amphan/9.jpg'),
    },
    {
        original: require('../../assets/images/Covid-19 + Amphan/10.jpg'),
        thumbnail: require('../../assets/images/Covid-19 + Amphan/10.jpg'),
    },
    {
    original: require('../../assets/images/Covid-19 + Amphan/11.jpg'),
    thumbnail: require('../../assets/images/Covid-19 + Amphan/11.jpg'),
    },
    {
    original: require('../../assets/images/Covid-19 + Amphan/12.jpg'),
    thumbnail: require('../../assets/images/Covid-19 + Amphan/12.jpg'),
    },
    {
    original: require('../../assets/images/Covid-19 + Amphan/13.jpg'),
    thumbnail: require('../../assets/images/Covid-19 + Amphan/13.jpg'),
    },
    {
    original: require('../../assets/images/Covid-19 + Amphan/14.jpg'),
    thumbnail: require('../../assets/images/Covid-19 + Amphan/14.jpg'),
    },
    {
    original: require('../../assets/images/Covid-19 + Amphan/15.jpg'),
    thumbnail: require('../../assets/images/Covid-19 + Amphan/15.jpg'),
    },
    {
        original: require('../../assets/images/Covid-19 + Amphan/16.jpg'),
        thumbnail: require('../../assets/images/Covid-19 + Amphan/16.jpg'),
    },
];
class SocialGal extends Component {
    render(){
      return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>Gallery</BreadcrumbItem>
                <BreadcrumbItem active>Social Work</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                <h3>Covid 19 and Amphan Releif Donation By Nostalgia Team</h3>
                <hr />
                </div>
            </div>
            <ImageGallery items={images}/>
        </div>
    )
    }
}

export default SocialGal;