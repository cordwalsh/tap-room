import React from 'react';
import { Link } from 'react-router-dom';
import addBeerLogo from './../assets/add_beer.png';

function Navbar() {
  return (
    <div>
    <h1> TAP A KEG </h1>
      <div className="navbar">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/keglist">KEGLIST</Link></li>
            <li><Link to="/addkeg">ADD A KEG</Link></li>
            <li><div className="logo">
              <img className="container_image" alt="beer logo" src={addBeerLogo} />
            </div></li>
      </ul>
    </div>
    </div>
  );
}

export default Navbar;
