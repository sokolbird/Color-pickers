import React, { Component } from 'react';
import {SketchPicker} from "react-color";
import ColorCode from "./ColorCode";
import copy from '../icons/content-copy.svg';

export default class SketchPickerCustom extends Component {
    state = {
        color: {r: 144, g: 19, b: 254, a: 1},
    };

    render() {
        let {color} = this.state;
        let rgba = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        return (
            <div className='main' style={{'background': rgba}}>
                <SketchPicker className='sketch-picker'
                              color={color}
                              height={300}
                              width={400}
                              onChange={this.handleColorChange}/>
                <ColorCode color={rgba}/>
            </div>
        )
    }

    handleColorChange = (color) => {
        this.setState({ color: color.rgb });
        document.getElementById('copy').src = copy;
    }
}