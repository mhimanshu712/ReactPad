import React, { PureComponent } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

class SingleColorPalette extends PureComponent {
    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette,this.props.colorId)
        this.state = {
             format: 'hex'
        }
    }

    gatherShades(palette,colorToFilterBy){
        let shades = []
        let allColors = palette.colors
        for(let key in allColors){
            shades = shades.concat (
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1)
    }

    changeFormat = (val)=>{
        this.setState({format: val})
    }

    render() {
        const {format} = this.state
        const {emoji,paletteName,id} = this.props.palette
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background ={color[format]} 
                showLink={false} 
            />
        ))
        return (
            <div className='SingleColorPalette Palette'>
                <Navbar
                    handleChange={this.changeFormat}
                    showBar={false}
                />
                <div className='Palette-colors'>
                    {colorBoxes}
                    <div className='ColorBox go-back'>
                        <Link to={`/palette/${id}`} className='back-button'>Go Back</Link>
                    </div>
                </div>

                <footer className='Palette-footer'>
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default SingleColorPalette