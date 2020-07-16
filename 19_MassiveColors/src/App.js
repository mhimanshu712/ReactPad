import React from 'react';
import './App.css';
import Palette from './Palette'
import seedColors from './seedColors'
import {generatePalette} from './colorHelpers'
import {Switch, Route} from 'react-router-dom'
import PaletteList from './PaletteList'

function App() {
  function findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id
    })
  }
  console.log(generatePalette(seedColors[4]))
  return (
    <Switch>
      <Route exact path='/' render={(rP)=> <PaletteList {...rP} palettes={seedColors}/>} />
      <Route 
        exact 
        path='/palette/:id' 
        render={(routeProps) => 
          <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
        } 
      />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
