import React, { Component } from 'react'
import './App.css';
import Palette from './Palette'
import seedColors from './seedColors'
import {generatePalette} from './colorHelpers'
import {Switch, Route} from 'react-router-dom'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPaletteForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      palettes: seedColors
    }
  }
  findPalette = (id)=>{
    return this.state.palettes.find(function(palette){
      return palette.id === id
    })
  }

  savePalette = (newPalette)=>{
    this.setState({palettes: [...this.state.palettes,newPalette]})
  }

  render(){
    return (
      <Switch>
        <Route 
          exact 
          path='/palette/new' 
          render={(rP) => 
            <NewPaletteForm 
              {...rP} 
              savePalette={this.savePalette}
              palettes = {this.state.palettes} 
            />
          }
        />
        <Route exact path='/' render={(rP)=> <PaletteList {...rP} palettes={this.state.palettes}/>} />
        <Route 
          exact 
          path='/palette/:id' 
          render={(routeProps) => 
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
          } 
        />
        <Route 
          exact 
          path='/palette/:paletteId/:colorId' 
          render={rP => 
            <SingleColorPalette colorId={rP.match.params.colorId} palette={generatePalette(this.findPalette(rP.match.params.paletteId))} />
          } 
        />
      </Switch>
    )
  }
  
}

export default App;
