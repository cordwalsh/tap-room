// I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).
// pint count decrease when beer is sold

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



function Keg(props){
    return (
        <div>
            <h3>{props.name} - {props.brand}</h3>
            <p><em>{props.price} - {props.abv}</em></p>
            <hr/>
        </div>
    );
}

Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired
};


export default Keg;
