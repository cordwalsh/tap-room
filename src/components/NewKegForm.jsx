import React from 'react';
import { Link } from 'react-router-dom';



function NewKegForm() {
  return (
    <div>
      <div className="new_keg_form">
        <form>
          <label>
            Name:
            <input type="text" name="beer_name" value={this.state.beer_name} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <br></br>
          <label>
            Brand:
            <input type="text" name="beer_brand" value={this.state.beer_brand} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <br></br>
          <label>
            Price:
            <input type="text" name="beer_price" value={this.state.beer_price} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <br></br>
          <label>
            ABV:
            <input type="text" name="beer_abv" value={this.state.beer_abv} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default NewKegForm;
