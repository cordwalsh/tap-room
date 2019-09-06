// shows a list of all kegs, name, brand, price, alcohol content.

// color or icon code to show if it has less than 10 pints

// kegs are color coded based on alcohol content

// display stronger beers differently than weaker beers


import React from 'react';
import { Link } from 'react-router-dom';
import Keg from './Keg'

var masterKegList = [
  {
    name: 'Total Domination',
    brand: 'Ninkasi Brewing Company',
    price: '$11.00',
    abv: '6.7%'
  },
  {
    name: 'Tecate Titanium',
    brand: 'Tecate',
    price: '$3.50',
    abv:  '7.5%'
  },
  {
    name: 'Batsquatch',
    brand: 'Rogue',
    price: '$8.00',
    abv: '6.7%'
    },
    {
    name: 'Dead Guy Ale',
    brand: 'Rogue',
    price: '$8.00',
    abv: '6.8%'
  }
];

function Keglist() {
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          key={index}/>
      )}
    </div>
  );
}



export default Keglist;
