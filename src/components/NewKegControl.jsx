// page for adding a new keg

import React from 'react';
import { Link } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import Navbar from './Navbar'

function NewKegControl() {
  return (
    <div>
      <Navbar />

      <h2>Add a new keg below</h2>

      <NewKegForm />
    </div>
  );
}

export default NewKegControl;
