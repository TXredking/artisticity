import React, { Component } from 'react';
import Carousel from './Carousel';
import Jumbotron from './Jumbotron';
import Gallery from './Gallery';

import './home.css';

import images from '../../images';

class Home extends Component {
    render (){
        return (
            <div>
                <main role="main">
                    <div id="mvp-banner" className="alert alert-info" role="alert">
                        Full functionality and more site features are coming soon!
                    </div>
                    <Carousel img_list={images} carousel_id="mainCarouselControls"/>
                    <Jumbotron />
                    <Gallery />
                </main>
            </div>
        )
    }
}

export default Home;
