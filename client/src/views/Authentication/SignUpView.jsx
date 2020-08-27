import React, { Component } from 'react';
import { signUp } from './../../services/authentication';
import './SignUpView.scss';

class AuthenticationSignUpView extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      photo: ''
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = event => {
    event.preventDefault();
    const { name, email, password, photo } = this.state;
    const body = { name, email, password, photo };
    console.log(body);
    signUp(body)
      .then(data => {
        const { user } = data;
        this.props.onUserUpdate(user);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  handlePhotoInputChange = event => {
    const file = event.target.files[0];

    this.setState({
      photo: file
    });
  };

  render() {
    return (
      <div className="form-box">
        <div className="form">
          <h2>Sign Up</h2>
          <form className="form-signup" onSubmit={this.handleFormSubmission}>
            <label htmlFor="input-name"></label>
            <input
              className="form"
              id="input-name"
              type="text"
              name="name"
              placeholder="Full Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />

            <label htmlFor="input-email"></label>
            <input
              className="form"
              id="input-email"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />

            <label htmlFor="input-password"></label>
            <input
              className="form"
              id="input-password"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <label htmlFor="photo">Profile Photo</label>
            <input
              className="form"
              type="file"
              name="photo"
              onChange={this.handlePhotoInputChange}
            />
            <div className="buttons">
              <button
                class="btn-form"
                data-sm-link-text="CLICK"
                target="_blank"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthenticationSignUpView;
