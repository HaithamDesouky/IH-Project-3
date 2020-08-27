import React, { Component } from 'react';
import { signIn } from './../../services/authentication';
import './SignUpView.scss';
import './SignUpView.scss';

class AuthenticationSignInView extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: null
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
    const { email, password } = this.state;
    const body = { email, password };
    signIn(body)
      .then(data => {
        const { user } = data;
        this.props.onUserUpdate(user);
        this.props.history.push('/');
      })
      .catch(error => {
        const serverError = error.response.data.error;
        this.setState({
          error: serverError
        });
      });
  };

  render() {
    return (
      <div className="form-box">
        <div className="form">
          <h2>Sign In</h2>
          <form
            className="
form-signup"
            onSubmit={this.handleFormSubmission}
          >
            <label htmlFor="input-email"></label>
            <input
              className="form"
              id="input-email"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
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
              required
              minLength="1"
            />

            {this.state.error && (
              <div className="error-block">
                <p>There was an error submiting the form:</p>
                <p>{this.state.error.message}</p>
              </div>
            )}
            <div className="buttons">
              <button class="btn-form">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthenticationSignInView;
