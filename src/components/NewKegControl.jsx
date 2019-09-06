import React from 'react';
import { Link } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import Navbar from './Navbar'

function NewKegControl() {
  return (
    <div>
      <Navbar />
      <h2><u>Add a new keg below</u></h2>
      <NewKegForm />
    </div>
  );
}

export default NewKegControl;
