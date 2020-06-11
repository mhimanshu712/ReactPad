import React, {Component} from 'react';
import './Pokecard.css'

const POKE_API = 
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padNum = (number) => (number <= 999? `00${number}`.slice(-3):number)

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${padNum(this.props.id)}.png`
        return(
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <div className="Pokecard-img">
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;