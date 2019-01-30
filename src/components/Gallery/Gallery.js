import React, { Component } from 'react';
import ProfileCard from './ProfileCard/ProfileCard';
import './Gallery.css';

class Gallery extends Component {
    render () {
        const profiles = [
            { name: 'Shelbi', img_src: './assets/images/profiles/felipe-galvan-417797-unsplash.jpg', alt: 'Thumbnail [100%x225]'},
            { name: 'John', img_src: './assets/images/profiles/jon-tyson-762623-unsplash.jpg', alt: 'Thumbnail [100%x225]'},
            { name: 'Peter', img_src: './assets/images/profiles/kyle-glenn-392519-unsplash.jpg', alt: 'Thumbnail [100%x225]'},
            { name: 'Janet', img_src: './assets/images/profiles/lucaxx-freire-486466-unsplash.jpg', alt: 'Thumbnail [100%x225]'},
            { name: 'Anna', img_src: './assets/images/profiles/mark-hayward-729236-unsplash.jpg', alt: 'Thumbnail [100%x225]'},
            { name: 'Sara', img_src: './assets/images/profiles/andres-gerlotti-559488-unsplash.jpg', alt: 'Thumbnail [100%x225]'}
        ];

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
