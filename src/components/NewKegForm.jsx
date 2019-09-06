import React from 'react';
import { Link } from 'react-router-dom';



function NewKegForm() {
  return (
    <div>
      <div className="new_keg_form">
        <form>
          <label>
            Name:
            <input type="text" name="beer_name" />
          </label>
          <br></br>
          <br></br>
          <label>
            Brand:
            <input type="text" name="beer_brand" />
          </label>
          <br></br>
          <br></br>
          <label>
            Price:
            <input type="text" name="beer_price" />
          </label>
          <br></br>
          <br></br>
          <label>
            ABV:
            <input type="text" name="beer_abv" />
          </label>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <input className="input_button" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default NewKegForm;
