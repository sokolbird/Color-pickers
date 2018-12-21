import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.css';
import './styles/main.css';
import './styles/pickers.css'
import Menu from "./Components/Menu";
import SwatchesPickerCustom from "./Components/SwatchesPickerCustom";
import SketchPickerCustom from "./Components/SketchPickerCustom";
import CirclePickerCustom from "./Components/CirclePickerCustom";
import HueAlphaCustom from "./Components/HueAlphaCustom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Menu/>
                    <Switch>
                        <Route path="/1" component={SketchPickerCustom}/>
                        <Route path="/2" component={SwatchesPickerCustom}/>
                        <Route path="/3" component={CirclePickerCustom}/>
                        <Route path="/4" component={HueAlphaCustom}/>
                        <Redirect to='/1'/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
