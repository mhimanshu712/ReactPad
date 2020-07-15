import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class PaletteList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const {palettes} = this.props;
        return (
            <div>
                 <h1>React Colors</h1>
                {palettes.map(palette => (
                    <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                ))}
            </div>
        )
    }
}

export default PaletteList