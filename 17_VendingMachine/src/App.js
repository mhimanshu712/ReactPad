import React from 'react';
import './App.css';
import Chips from './Chips'
import Sardines from './Sardines'
import Soda from './Soda'
import VendingMachine from './VendingMachine'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path='/' >
        <VendingMachine/>
      </Route>
      <Route exact path='/soda' >
        <Soda />
      </Route>
      <Route exact path='/sardines' render={() => <Sardines />} />
      <Route  path='/chips' component={Chips} />
    </div>
  );
}

export default App;
