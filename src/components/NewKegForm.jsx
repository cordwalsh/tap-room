import React from 'react';
import { Link } from 'react-router-dom';


class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
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
            <input type="text" name="name" />
          </label>
          <br></br>
          <br></br>
          <label>
            Brand:
            <input type="text" name="brand" />
          </label>
          <br></br>
          <br></br>
          <label>
            Price:
            <input type="text" name="price" />
          </label>
          <br></br>
          <br></br>
          <label>
            ABV:
            <input type="text" name="abv" />
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
