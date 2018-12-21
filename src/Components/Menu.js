import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/menu.css'

export default class Menu extends Component {
    render() {
        return (
            <div className="dropdown">
                <button id="dropbtn">Варианты интерфейса ⮟</button>
                <div className="dropdown-content">
                    <NavLink to='/1' activeClassName='selected'><div>Вариант 1</div></NavLink>
                    <NavLink to='/2' activeClassName='selected'><div>Вариант 2</div></NavLink>
                    <NavLink to='/3' activeClassName='selected'><div>Вариант 3</div></NavLink>
                    <NavLink to='/4' activeClassName='selected'><div>Вариант 4</div></NavLink>
                </div>
            </div>
        )
    }
}