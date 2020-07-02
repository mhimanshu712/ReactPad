import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Food from './Food'
import FoodSearch from './FoodSearch'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/food/:name' render={(routeProps)=> <Food {...routeProps} /> } />
        <Route exact path='/' render={(rp)=> <FoodSearch {...rp} />} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
