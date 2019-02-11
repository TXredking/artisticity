import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    state = {
        fields: {
            email: '',
            name: '',
            message: ''
        }
    };

    changeHandler = event => {
        const { name: fieldName, value } = event.target;

        this.setState({
            fields: {
                ...this.state.fields,
                [fieldName]: value
            }
        });

    }

    render (){
        return (
            <div>
                <main role="main" id="contact-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg">
                                <form id="contact-form" action="https://formspree.io/hirerory@gmail.com" method="POST">
                                    <h1>Contact Us!</h1>
                                    <div className="form-group">
                                      <label htmlFor="nameInput">Name</label>
                                      <input type="text"
                                             name="name"
                                             className="form-control"
                                             value={this.state.fields.name}
                                             onChange={this.changeHandler}
                                      />
                                    </div>
                                  <div className="form-group">
                                    <label htmlFor="emailInput">Email address</label>
                                    <input type="email"
                                           name="email"
                                           className="form-control"
                                           value={this.state.fields.email}
                                           onChange={this.changeHandler}
                                    />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="textAreaInput">Message</label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        id="textAreaInput"
                                        rows="5"
                                        value={this.state.fields.message}
                                        onChange={this.changeHandler}
                                    ></textarea>
                                  </div>
                                  <button id="form-submit" type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Contact;
