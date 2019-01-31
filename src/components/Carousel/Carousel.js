import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    render () {
        const { img_list, carousel_id } = this.props;

        let carouselItems = img_list ? img_list.map((item, i) => {
            let classes = i === 0 ? "carousel-item active" : "carousel-item";
            return <div className={classes} key={i}>
                <img className="d-block w-100" src={item.src} alt="need-to-change"/>
            </div>
        }) : [];

        return (
            <div>
               <div id={carousel_id} className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {carouselItems}
                </div>
               </div>
               <a className="carousel-control-prev" href={`#${carousel_id}`} role="button" data-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true">
                   <span className="sr-only">Previous</span>
                 </span></a>
               <a className="carousel-control-next" href={`#${carousel_id}`} role="button" data-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true">
                   <span className="sr-only">Next</span>
                 </span></a>
             </div>
        )
    }
}

export default Carousel;
