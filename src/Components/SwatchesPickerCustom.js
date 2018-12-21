import React, { Component } from 'react';
import {SwatchesPicker} from "react-color";
import copy from '../icons/content-copy.svg';
import ColorCode from "./ColorCode";


export default class SwatchesPickerCustom extends Component {
    state = {
        color: '#17a366',
    };

    render() {
        let {color} = this.state;
        return (
            <div className='main' style={{'background': color}}>
                <SwatchesPicker className='swatches-picker'
                                height={295}
                                width={520}
                                onChange={this.handleColorChange}/>
                <ColorCode color={color}/>
            </div>
        )
    }

    handleColorChange = (color) => {
        this.setState({ color: color.hex });
        document.getElementById('copy').src = copy;
    };
}