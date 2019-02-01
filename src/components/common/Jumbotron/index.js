import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render () {
        return (
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4 text-center">Find an artist for your next street art project!</h1>
              </div>
            </div>
        )
    }
}

export default Jumbotron;
