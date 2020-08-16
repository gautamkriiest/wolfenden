import React, {Component} from 'react';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';
import '../../assets/css/Gallery.css';

// Create new array with URLs for images
let imgUrls = [
    require('../../assets/images/Covid-19 + Amphan/1.jpg'),
    require('../../assets/images/Covid-19 + Amphan/2.jpg'),
    require('../../assets/images/Covid-19 + Amphan/3.jpg'),
    require('../../assets/images/Covid-19 + Amphan/4.jpg'),
    require('../../assets/images/Covid-19 + Amphan/5.jpg'),
    require('../../assets/images/Covid-19 + Amphan/6.jpg'),
    require('../../assets/images/Covid-19 + Amphan/7.jpg'),
    require('../../assets/images/Covid-19 + Amphan/8.jpg'),
    require('../../assets/images/Covid-19 + Amphan/9.jpg'),
    require('../../assets/images/Covid-19 + Amphan/10.jpg'),
    require('../../assets/images/Covid-19 + Amphan/11.jpg'),
    require('../../assets/images/Covid-19 + Amphan/12.jpg'),
    require('../../assets/images/Covid-19 + Amphan/13.jpg'),
    require('../../assets/images/Covid-19 + Amphan/14.jpg'),
    require('../../assets/images/Covid-19 + Amphan/15.jpg'),
    require('../../assets/images/Covid-19 + Amphan/16.jpg')
   ];


// Component for gallery
class SocialGallery extends Component{
    constructor(props) {
     super(props);
    
     this.state = {
      showModal: false,
      url: ''
     }
    
     this.openModal = this.openModal.bind(this);
    
     this.closeModal = this.closeModal.bind(this);
    }
    
    render() {
     return(
      <div refs='gallery-container' className='container-fluid gallery-container'>
       <div className='row'>
        {
         imgUrls.map((url, index) => {
          return <div className='col-sm-6 col-md-3 col-xl-2'>
           <div className='gallery-card'>
            <GalleryImage className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
    
            <span className='card-icon-open fa fa-expand' value={url} onClick={(e) => this.openModal(url, e)}></span>
           </div>
         </div>
        })
       }
      </div>
    
      <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} /> 
     </div>
     )
    }
   
    // Function for opening modal dialog
    openModal(url, e) {
     this.setState({
      showModal: true,
      url: url
     })
    };
   
    // Function for closing modal dialog
    closeModal() {
     this.setState({
      showModal: false,
      url: ''
     })
    }
   }


export default SocialGallery;