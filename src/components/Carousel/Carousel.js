import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    render () {
        return (
            <div>
               <div id="carouselControls" className="carousel slide" data-ride="carousel">
                 <div className="carousel-inner">
                   <div className="carousel-item active">
                     <img className="d-block w-100" src="./assets/images/carousel/adam-jang-260876-unsplash.jpg" alt="adam-jang-260876-unsplash" />
                   </div>
                   <div className="carousel-item">
                     <img className="d-block w-100" src="./assets/images/carousel/dave-1144193-unsplash.jpg" alt="dave-1144193-unsplash" />
                   </div>
                   <div className="carousel-item">
                     <img className="d-block w-100" src="./assets/images/carousel/evelyn-semenyuk-653626-unsplash.jpg" alt="evelyn-semenyuk-653626-unsplash" />
                   </div>
                   <div className="carousel-item">
                     <img className="d-block w-100" src="./assets/images/carousel/luis-alfonso-orellana-246919-unsplash.jpg" alt="luis-alfonso-orellana-246919-unsplash" />
                   </div>
                   <div className="carousel-item">
                     <img className="d-block w-100" src="./assets/images/carousel/nathan-dumlao-532284-unsplash.jpg" alt="nathan-dumlao-532284-unsplash" />
                   </div>
                   <div className="carousel-item">
                     <img className="d-block w-100" src="./assets/images/carousel/nick-fewings-701074-unsplash.jpg" alt="nick-fewings-701074-unsplash" />
                   </div>
                   <div className="carousel-item">
                     <img className="d-block w-100" src="./assets/images/carousel/this-guy-458907-unsplash.jpg" alt="this-guy-458907-unsplash" />
                   </div>
                 </div>
               </div>
               <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true">
                   <span className="sr-only">Previous</span>
                 </span></a>
               <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true">
                   <span className="sr-only">Next</span>
                 </span></a>
             </div>
        )
    }
}

export default Carousel;
