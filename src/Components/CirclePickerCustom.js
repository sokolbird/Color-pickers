import React, { Component } from 'react';
import {CirclePicker} from "react-color";
import ColorCode from "./ColorCode";
import copy from '../icons/content-copy.svg';

export default class CirclePickerCustom extends Component {
    state = {
        color: '#009688',
    };

    render() {
        let {color} = this.state;
        return (
            <div className='main' style={{'background': color}}>
                <CirclePicker color={color}
                              className='custom-circle-picker'
                              circleSize={50}
                              circleSpacing={20}
                              width={420}
                              onChange={this.handleColorChange}/>
                <ColorCode color={color}/>
            </div>
        )
    }

    handleColorChange = (color) => {
        this.setState({ color: color.hex });
        document.getElementById('copy').src = copy;
    }
}