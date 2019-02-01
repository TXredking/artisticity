import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

class Contact extends Component {
    render (){
        return (
            <div>
                <Navbar />
                    <main role="main">
                        Contact Page
                    </main>
                <Footer />
            </div>
        )
    }
}

export default Contact;
