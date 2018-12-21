import React, { Component } from 'react';
import copy from '../icons/content-copy.svg';
import copyOk from '../icons/check-all.svg';

export default class ColorCode extends Component {
    render() {
        return (
            <p className='color-code'
               title='Нажмите, чтобы скопировать'
               onClick={this.handleCopy}>
                Код выбранного цвета: {this.props.color}
                <img src={copy}
                     alt='copy'
                     id='copy'
                     style={{'paddingLeft': '10px'}}/>
            </p>
        )
    }

    handleCopy = () => {
        const el = document.createElement('textarea');
        el.value = this.props.color;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        document.getElementById('copy').src = copyOk;
    }
}