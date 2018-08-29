import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import UserList from './UserList';
import UserForm from './UserForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Content/>
                <UserList/>
                <hr/>
                <UserForm/>

            </div>
        );
    }
}

export default App;
