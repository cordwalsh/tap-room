// form for adding a new keg
 // name, brand, price, alcohol content.


import React from 'react';
import { Link } from 'react-router-dom';
// import harleyLogo from './../assets/harley_logo.png';

function NewKegForm() {
  return (
    <div>
      <div className="new_keg_form">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>

          <label>
            Brand:
            <input type="text" name="brand" />
          </label>

          <label>
            Price:
            <input type="text" name="price" />
          </label>

          <label>
            ABV:
            <input type="text" name="abv" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default NewKegForm;
