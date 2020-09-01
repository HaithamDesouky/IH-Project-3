import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { LoggedInMenuItems, NotLoggedInMenuItems } from './MenuItems';
import { Button } from '../Button/Button';
import './NavBar.scss';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          BandFinder<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {(this.props.user && (
            <>
              {LoggedInMenuItems.map((item, index) => {
                return (
                  <>
                    <li key={index}>
                      <Link
                        onClick={this.handleClick}
                        className={item.cName}
                        to={item.url}
                      >
                        {item.title}
                      </Link>
                    </li>
                  </>
                );
              })}
              <li id="signout">
                <button id="signout" onClick={this.props.onSignOut}>
                  <span>Sign Out</span>
                </button>
              </li>
            </>
          )) ||
            NotLoggedInMenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={this.handleClick}
                    className={item.cName}
                    to={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
// <Navbar
//   isOpen={this.state.menuOpen}
//   onStateChange={state => this.handleStateChange(state)}
//   {...this.props}
// >
//   {/* <Link to="/" class="home">
//   IronLootBox
// </Link> */}
//   <Link onClick={() => this.closeMenu()} to="/" class="home">
//     Home
//   </Link>
//   <Link onClick={() => this.closeMenu()} to="/shop">
//     Shop
//   </Link>
//   <Link onClick={() => this.closeMenu()} to="/social/newsfeed">
//     Social Area
//   </Link>

//   {(this.props.user && (
//     <>
//       <Link onClick={() => this.closeMenu()} to="/post/create">
//         Create a post
//       </Link>
//       <Link onClick={() => this.closeMenu()} to="/credits">
//         Credits: {this.props.user.credits}
//       </Link>
//       <Link onClick={() => this.closeMenu()} to="/checkout">
//         Checkout
//       </Link>

//       {this.props.user.admin && (
//         <Link onClick={() => this.closeMenu()} to="/admin">
//           Admin
//         </Link>
//       )}
//       <>
//         <Link
//           onClick={() => this.closeMenu()}
//           to={`/user/${this.props.user._id}`}
//         >
//           {this.props.user.name}
//         </Link>
//         <button id="signout" onClick={this.props.onSignOut}>
//           <span>Sign Out</span>
//         </button>
//       </>
//     </>
//   )) || (
//     <>
//       <Link to="/authentication/sign-up">Sign Up</Link>
//       <Link to="/authentication/sign-in">Sign In</Link>
//     </>
//   )}
// </Navbar>
