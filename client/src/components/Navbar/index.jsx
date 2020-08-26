import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

class Navbar extends React.Component {
  componentDidUpdate(previousProps, previousState) {
    // if (previousProps.user.credits !== this.state.user.credits) {
    //   this.loadUser();
    // }

    console.log('hey', previousProps);
  }

  render() {
    return (
      <nav id="nav">
        <Link to="/" class="home">
          Home
        </Link>
        <Link to="/shop">Shop</Link>
        <Link to="/social/newsfeed">Social Area</Link>

        {(this.props.user && (
          <>
            <Link to="/post/create">Create a post</Link>
            <Link to="/credits">Credits: {this.props.user.credits}</Link>
            <Link to="/checkout">Checkout</Link>

            {this.props.user.admin && <Link to="/admin">Admin</Link>}
            <>
              <Link to={`/user/${this.props.user._id}`}>
                {this.props.user.name}
              </Link>
              <button onClick={this.props.onSignOut}>
                <span>Sign Out</span>
              </button>
            </>
          </>
        )) || (
          <>
            <Link to="/authentication/sign-up">Sign Up</Link>
            <Link to="/authentication/sign-in">Sign In</Link>
          </>
        )}
      </nav>
    );
  }
}

export default Navbar;
