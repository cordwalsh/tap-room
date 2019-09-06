import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/Navbar';
import Keglist from './components/Keglist';
import Keg from './components/Keg';
import NewKegControl from './components/NewKegControl';
import NewKegForm from './components/NewKegForm';





const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Keglist />
      <NewKegControl />

    </div>
  </BrowserRouter>


);

export default App;
