import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel/Carousel';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Gallery from './Gallery/Gallery';

import images from '../images';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
       <main role="main">
         <Carousel img_list={images}/>
         <Jumbotron />
         <Gallery />
       </main>
       <Footer />
     </div>
    );
  }
}

export default App;
