import React, { Component } from 'react';
import './ProfileCard.css';
import Carousel from '../../Carousel/Carousel';

class ProfileCard extends Component {
    render () {
        const { carousel_id, style_id, alt, profile_img, name, other_imgs } = this.props.profile;
        const images = [...other_imgs, {src: profile_img}];

        return (
            <div>
                <div className="card mb-4 box-shadow">
                  <a href={`#${style_id}`} data-toggle="modal" className="card">
                      <img className="card-img-top" alt={alt} src={profile_img} />
                  </a>
                  <div className="card-body">
                    <p className="card-text text-center lead">{name}</p>
                  </div>
                </div>
                <div className="modal fade" id={style_id} tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <Carousel img_list={images} carousel_id={carousel_id}/>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;
