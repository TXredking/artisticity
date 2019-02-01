import React, { Component } from 'react';

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src="https://fontmeme.com/permalink/190111/7f3dff02180e14ee009f826eb3251a7f.png" alt="spray-paint-fonts" border="0" />
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                        <a className="nav-link" href="/about">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                      </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
