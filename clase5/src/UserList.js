import React from 'react';
import './App.css';

class UserList extends React.Component {
    constructor(){
        super();
        this.state = {
            users : [],
            filtro: '',
            loading: false
        }
    }

    componentWillMount(){
        console.log('Me voy a dibujar en pantalla');
    }

    componentDidMount(){
        console.log('1. Me dibuje en pantalla');

        this.setState({loading: true});

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                console.log('3. Recibi a los usuarios!');
                this.setState(
                    {
                        users: users,
                        loading: false
                    }
                    );
            });

        console.log('2.Fui a pedir los usuarios');
    }

    componentWillUnmount(){
        console.log('Me van sacar de la pantalla');
    }

    filtroChange = (event) => {
        console.log(event.target.value);
        this.setState({ filtro: event.target.value });
    };

    render(){
        console.log('Me estoy dibujando en pantalla');

        return(
            <div className="App-intro">
                { this.state.loading ? <h1>CARGADO....</h1>: ''}
                <label> Filtrar: </label>
                <input onChange={this.filtroChange}/>
                <br/>
                <br/>
                <label>Tu filtro es: {this.state.filtro}</label>
                <hr/>
                Listado de Usuarios:
                <ul className={'myclasedelista'}>
                    {
                        this.state.users
                            .filter( user => {
                                return user.name.toLowerCase().includes(this.state.filtro.toLowerCase());
                            })
                            .map( user => {
                                return (
                                    <li> {`id: ${user.id} name: ${user.name}`}</li>
                                )
                            })
                    }
                </ul>
            </div>
        );
    }
}

export default UserList;