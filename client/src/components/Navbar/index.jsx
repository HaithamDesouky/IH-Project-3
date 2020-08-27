import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import { slide as Navbar } from 'react-burger-menu';

export default props => {
  return (
    <Navbar {...props}>
      {/* <Link to="/" class="home">
        IronLootBox
      </Link> */}
      <Link to="/" class="home">
        Home
      </Link>
      <Link to="/shop">Shop</Link>
      <Link to="/social/newsfeed">Social Area</Link>

      {(props.user && (
        <>
          <Link to="/post/create">Create a post</Link>
          <Link to="/credits">Credits: {props.user.credits}</Link>
          <Link to="/checkout">Checkout</Link>

          {props.user.admin && <Link to="/admin">Admin</Link>}
          <>
            <Link to={`/user/${props.user._id}`}>{props.user.name}</Link>
            <button id="signout" onClick={props.onSignOut}>
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
    </Navbar>
  );
};
