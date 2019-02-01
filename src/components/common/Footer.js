import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <div>
                <footer className="text-muted bg-dark" style={{minHeight: '50px', paddingTop: '10px'}}>
                  <div className="container">
                    <p className="float-right" style={{marginBottom: '0px'}}>
                      <a href="/">Back to top</a>
                    </p>
                    <p style={{marginBottom: '0px'}}>Copyright 2019 by <a href="www.rorymcl.com">Rory McLaughlin</a></p>
                  </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
