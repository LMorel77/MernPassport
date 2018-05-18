import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css" // NavBar CSS

const NavBar = ({ loggedIn, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <ul>
        <li key="home" className="nav-item">
          <Link className="nav-item nav-link" to="/home">Home - Sign Up</Link>
        </li>
      </ul> */}
      {/* Original Franklin Code... */}
      <Link to="/">Home - Sign Up</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {loggedIn ?
            <li className="nav-item">
              <a className="nav-item nav-link" href="#" onClick={logout}>Logout</a>
            </li>
            :
            [
              // Original Franklin Code...
              // <li key="signup" className="nav-item">
              //   <Link className="nav-item nav-link" to="/signup">Signup</Link>
              // </li>,
              // Luis: Updated code...
              <li key="about" className="nav-item">
                <Link className="nav-item nav-link" to="/about">About</Link>
              </li>,
              <li key="feed" className="nav-item">
                <Link className="nav-item nav-link" to="/feed">Feed</Link>
              </li>,
              <li key="profile" className="nav-item">
                <Link className="nav-item nav-link" to="/profile">Profile</Link>
              </li>,
              <li key="login" className="nav-item">
                <Link className="nav-item nav-link" to="/login">Login</Link>
              </li>
            ]
          }
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;