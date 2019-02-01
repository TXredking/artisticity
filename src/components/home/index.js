import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import Carousel from './Carousel';
import Jumbotron from './Jumbotron';
import Footer from '../common/Footer';
import Gallery from './Gallery';

import images from '../../images';

class Home extends Component {
    render (){
        return (
            <div>
                <Navbar />
                <main role="main">
                    <Carousel img_list={images} carousel_id="mainCarouselControls"/>
                    <Jumbotron />
                    <Gallery />
                </main>
                <Footer />
            </div>
        )
    }
}

export default Home;
