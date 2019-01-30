import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {
    render () {
        // let carouselImages = [];
        // if (this.props.profile.other_imgs) {
        //     carouselImages = this.props.profile.other_imgs.map(image => {
        //         return <div className="carousel-item active">
        //             <img className="d-block w-100" src={image} />
        //         </div>
        //     });
        // }

        return (
            <div>
                <div className="card mb-4 box-shadow">
                  <a href={`#${this.props.profile.style_id}`} data-toggle="modal" className="card">
                      <img className="card-img-top" alt={this.props.profile.alt} src={this.props.profile.profile_img} />
                  </a>
                  <div className="card-body">
                    <p className="card-text text-center lead">{this.props.profile.name}</p>
                  </div>
                </div>
                <div className="modal fade" id={this.props.profile.style_id} tabIndex={-1} role="dialog">
                  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{this.props.profile.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                          <div className="carousel-item active">
                             <img className="d-block w-100" src={this.props.profile.profile_img} />
                          </div>
                        {/* <div id={this.props.profile.carousel_id} className="carousel slide" data-ride="carousel">
                          <div className="carousel-inner">
                            { carouselImages }
                          </div>
                        </div>
                        <a className="carousel-control-prev" href={`#${this.props.profile.carousel_id}`} role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true" />
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href={`#${this.props.profile.carousel_id}`}  role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true" />
                          <span className="sr-only">Next</span>
                        </a> */}
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
