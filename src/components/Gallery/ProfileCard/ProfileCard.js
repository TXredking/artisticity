import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {
    render () {
        return (
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" alt={this.props.profile.alt} src={this.props.profile.img_src} />
              <div className="card-body">
                <p className="card-text text-center lead">{this.props.profile.name}</p>
              </div>
            </div>
        )
    }
}

export default ProfileCard;
