import React from 'react';
import './App.css';
import logo from "./logo.svg";

class Header extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </div>
        );
    }
}

export default Header;