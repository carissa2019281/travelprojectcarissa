import React, {Component} from 'react';
import Photo from './mainphoto.jpg';
import Alaska from './alaska.jpg';
import "./Grid.css"; 

class Grid extends Component {
    render (){
    return (
      <div className="wrapper">           
        <div className="title">
                <h1>The Most Beautiful Places in the World!</h1>
                <h3>Plan your vacation on the most beautiful places in the world</h3>
            </div>  
        <img src={Photo} className="main-photo" alt="main-photo" />
        
        {/* <div className="navbar"> </div> */}
        <div className="gallery">Gallery</div>
        <div className="stories">Stories</div>
        <div className="discover"> DISCOVER</div>
        <div className="discoverbar"> 
        <img src={Alaska} className="alaska" alt="alaska" />
        <img src={Alaska} className="alaska 2" alt="alaska2" />
        </div>

        <div className="discoverphotos"> discover photos</div>
        <div className="travelheader"> travel header</div>
         <div className="travelslides"> travel slides</div>
          
      </div>
    );
  }
}

export default Grid;
