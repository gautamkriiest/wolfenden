import React,{Component} from 'react';


// Component for gallery image
class GalleryImage extends Component {
    render() {
     return(
      <img height={250} width={250}  className={this.props.className} src={this.props.src} alt={this.props.alt} />
     )
    }
   }


export default GalleryImage;


