// header with home, route links

import React from 'react';
import { Link } from 'react-router-dom';
// import harleyLogo from './../assets/harley_logo.png';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <h1> TAP A KEG </h1>

        <Link to="/">HOME</Link>
        <Link to="/">KEGLIST</Link>
        <Link to="/">ADD A KEG</Link>



      </div>
    </div>
  );
}

export default Navbar;
