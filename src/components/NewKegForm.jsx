import React from 'react';
import { Link } from 'react-router-dom';


class NewKegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {beer_name: '', beer_brand: '', beer_price: '', beer_abv: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.name});
  }

  handleSubmit(event) {
    alert('A keg was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
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
}

export default NewKegForm;
