import React, { Component } from 'react';
import {HuePicker, AlphaPicker} from "react-color";
import ColorCode from "./ColorCode";
import copy from '../icons/content-copy.svg';

export default class HueAlphaCustom extends Component {
    state = {
        color: {r: 144, g: 19, b: 254, a: 1}
    };

    render() {
        let {color} = this.state;
        let rgba = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        return (
            <div className='main' style={{'background': rgba}}>
                <div className='hue-alpha'>
                    <HuePicker width={500}
                               color={color}
                               onChange={this.handleColorChange}/>
                    <br/>
                    <AlphaPicker width={500}
                                 color={color}
                                 onChange={this.handleColorChange}/>
                </div>
                <ColorCode color={rgba}/>
            </div>
        )
    }

    handleColorChange = (color) => {
        this.setState({ color: color.rgb });
        document.getElementById('copy').src = copy;
    }
}