import React, {Component} from 'react';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';
import '../../assets/css/Gallery.css';

// Create new array with URLs for images
let imgUrls = [
    require('../../assets/images/Nostalgia2019/1.jpg'),
    require('../../assets/images/Nostalgia2019/2.jpg'),
    require('../../assets/images/Nostalgia2019/3.jpg'),
    require('../../assets/images/Nostalgia2019/4.jpg'),
    require('../../assets/images/Nostalgia2019/5.jpg'),
    require('../../assets/images/Nostalgia2019/6.jpg'),
    require('../../assets/images/Nostalgia2019/7.jpg'),
    require('../../assets/images/Nostalgia2019/8.jpg'),
    require('../../assets/images/Nostalgia2019/9.jpg'),
    require('../../assets/images/Nostalgia2019/10.jpg'),
    require('../../assets/images/Nostalgia2019/11.jpg'),
    require('../../assets/images/Nostalgia2019/12.jpg'),
    require('../../assets/images/Nostalgia2019/13.jpg'),
    require('../../assets/images/Nostalgia2019/14.jpg'),
    require('../../assets/images/Nostalgia2019/15.jpg'),
    require('../../assets/images/Nostalgia2019/16.jpg'),
    require('../../assets/images/Nostalgia2019/17.jpg'),
    require('../../assets/images/Nostalgia2019/18.jpg'),
    require('../../assets/images/Nostalgia2019/19.jpg'),
    require('../../assets/images/Nostalgia2019/20.jpg'),
    require('../../assets/images/Nostalgia2019/21.jpg'),
    require('../../assets/images/Nostalgia2019/22.jpg'),
    require('../../assets/images/Nostalgia2019/23.jpg'),
    require('../../assets/images/Nostalgia2019/24.jpg'),
    require('../../assets/images/Nostalgia2019/25.jpg'),
    require('../../assets/images/Nostalgia2019/26.jpg'),
    require('../../assets/images/Nostalgia2019/27.jpg'),
    require('../../assets/images/Nostalgia2019/28.jpg'),
    require('../../assets/images/Nostalgia2019/29.jpg'),
    require('../../assets/images/Nostalgia2019/30.jpg'),
    require('../../assets/images/Nostalgia2019/31.jpg'),
    require('../../assets/images/Nostalgia2019/32.jpg'),
    require('../../assets/images/Nostalgia2019/33.jpg')
   ];


// Component for gallery
class NostalgiaGallery extends Component{
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


export default NostalgiaGallery;