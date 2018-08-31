import React, { Component } from 'react';
import './App.css';
import UserForm from './User/UserForm.js'
import Counter from './Counter/Counter';
import Header from './Layout/Header';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title={"Titulo loco!"}/>
                <Header title={"Titulo Dos!"} color={'blue'}/>
                <Header/>
                <hr/>
                <Counter init={0} step={1}/>
                <Counter init={10} step={5}/>
                <Counter init={20} step={10}/>
                <hr/>
                <UserForm/>
            </div>
        );
    }
}

export default App;
