import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Component } from 'react';
import '../../assets/css/image-gallery.css';
import { Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from "react-router-dom";


const images = [
    {
      original: require('../../assets/images/Nostalgia2019/1.jpg'),
      thumbnail: require('../../assets/images/Nostalgia2019/1.jpg'),
    },
    {
      original: require('../../assets/images/Nostalgia2019/2.jpg'),
      thumbnail: require('../../assets/images/Nostalgia2019/2.jpg'),
    },
    {
      original: require('../../assets/images/Nostalgia2019/3.jpg'),
      thumbnail: require('../../assets/images/Nostalgia2019/3.jpg'),
    },
    {
        original: require('../../assets/images/Nostalgia2019/4.jpg'),
        thumbnail: require('../../assets/images/Nostalgia2019/4.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/5.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/5.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/6.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/6.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/7.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/7.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/8.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/8.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/9.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/9.jpg'),
    },
    {
        original: require('../../assets/images/Nostalgia2019/10.jpg'),
        thumbnail: require('../../assets/images/Nostalgia2019/10.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/11.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/11.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/12.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/12.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/13.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/13.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/14.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/14.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/15.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/15.jpg'),
    },
    {
        original: require('../../assets/images/Nostalgia2019/16.jpg'),
        thumbnail: require('../../assets/images/Nostalgia2019/16.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/17.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/17.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/18.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/18.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/19.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/19.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/20.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/20.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/21.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/21.jpg'),
    },
    {
        original: require('../../assets/images/Nostalgia2019/22.jpg'),
        thumbnail: require('../../assets/images/Nostalgia2019/22.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/23.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/23.jpg'),
    },
    {
    original: require('../../assets/images/Nostalgia2019/24.jpg'),
    thumbnail: require('../../assets/images/Nostalgia2019/24.jpg'),
    },
  ];
class NostalgiaGal extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>Gallery</BreadcrumbItem>
                    <BreadcrumbItem active>
                        <Link to="/nostalgia">Nostalgia</Link>
                    </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>Nostalgia</h3>
                    <hr />
                    </div>
                </div>
                <ImageGallery items={images}/>
            </div>
        )
    }
}

export default NostalgiaGal;