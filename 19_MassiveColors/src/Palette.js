import React, { Component } from 'react'
import ColorBox from './ColorBox'
import {withStyles} from '@material-ui/styles'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import styles from './styles/PaletteStyles'


class Palette extends Component {
    constructor(props) {
        super(props)

        this.state = {
            level:500,
            format: 'hex'
        }
    }

    changeLevel = (newLevel)=>{
        this.setState({level:newLevel})
    }

    changeFormat = (val)=>{
        this.setState({format: val})
    }

    render() {
        const {colors,paletteName,emoji,id} = this.props.palette
        const {classes} = this.props
        const {level,format} = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.id} 
                colorId={color.id}
                paletteId={id}
                showingFullPalette={true}
            />
        ))
        return (
            <div className={classes.Palette}>

                <Navbar level={level} 
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showBar={true}
                />
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                
                <PaletteFooter paletteName={paletteName} emoji={emoji} />

            </div>
        )
    }
}

export default withStyles(styles)(Palette)