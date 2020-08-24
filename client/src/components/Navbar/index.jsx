import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import BasketInformation from "../../components/Credits/BasketInformation";

const Navbar = (props) => {
  return (
    <nav>
      <Link to="/">Project</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/post/create">Create a post</Link>
      <Link to="/social/newsfeed">Social Area</Link>
      <Link to="/credits">Buy Credits</Link>
      <Link to="/checkout">Checkout</Link>

      {(props.user && (
        <>
          {props.user.admin && <Link to="/admin">Admin</Link>}
          <>
            <Link to={`/user/${props.user._id}`}>{props.user.name}</Link>
            <button onClick={props.onSignOut}>Sign Out</button>
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
};

export default Navbar;
