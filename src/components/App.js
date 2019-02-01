import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './home';
import About from './about';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
