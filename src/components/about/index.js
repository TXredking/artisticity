import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

class About extends Component {
    render (){
        return (
            <div>
                <Navbar />
                    <main role="main">
                        About Page
                    </main>
                <Footer />
            </div>
        )
    }
}

export default About;
