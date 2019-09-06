import React from 'react';
import { Link } from 'react-router-dom';


class NewKegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer_name: '',
      beer_brand: '',
      beer_price: '',
      beer_abv: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'text' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

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
