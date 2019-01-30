import React, { Component } from 'react';
import ProfileCard from './ProfileCard/ProfileCard';
import './Gallery.css';
import profiles from '../../profiles';

class Gallery extends Component {
    render () {
        const profileCards = profiles.map((profile, i) => {
            return <div className="col-md-4" key={i}>
                    <ProfileCard profile={profile} />
                </div>
        });

        return (
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  { profileCards }
                </div>
              </div>
            </div>
        )
    }
}

export default Gallery;
