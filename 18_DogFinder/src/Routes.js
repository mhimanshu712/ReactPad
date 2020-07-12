import React, { Component } from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
import Dogs from './Dogs'
import Dog from './Dog'

class Routes extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const getDog = p => {
            let name = p.match.params.name;
            let currentDog = this.props.dogs.find(
                dog => dog.name.toLowerCase() === name.toLowerCase()
            )
            if(currentDog == undefined) return <Redirect to='/' />
            return <Dog {...p} data={currentDog} />
          }

        return (
        <Switch>
          <Route exact path='/' render={()=> <Dogs data={this.props.dogs} />} />
          <Route exact path='/dog/:name' render={getDog} />
          <Redirect to='/' />
        </Switch>
        )
    }
}

export default Routes