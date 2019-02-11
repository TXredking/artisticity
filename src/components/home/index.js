import React, { Component } from 'react';
import Carousel from './Carousel';
import Jumbotron from './Jumbotron';
import Gallery from './Gallery';

import images from '../../images';

class Home extends Component {
    render (){
        return (
            <div>
                <main role="main">
                    <Carousel img_list={images} carousel_id="mainCarouselControls"/>
                    <Jumbotron />
                    <Gallery />
                </main>
            </div>
        )
    }
}

export default Home;
