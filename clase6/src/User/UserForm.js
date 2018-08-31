import React from 'react';

class UserForm extends React.Component {

    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    handlerUserNameChange = (event) => {
        let username = event.target.value;
        console.log(username);
        this.setState({ username: username });
    };

    handlerChange = (event, field) => {
        let newState = {};
        newState[field] = event.target.value;
        console.log(newState);
        this.setState(newState);
    };

    handlerClick = () => {
        alert(JSON.stringify(this.state, null, 4));
    };


    /*
    * Agregar los labels de validacion de datos.
    *
    * 1. Si el username es menor a 5 mostrar "EL username tiene que tener mas de 5 caracteres"
    * 2. El password tiene que tener mas 6 caracteres
    * 3. El confirmPassword tiene que ser igual al password.
    * */
    render(){
        return (
            <div>
                <label> Formulario alta usuario</label><br/>
                <br/>
                <label>Nombre de Usuario: </label>
                <input onChange={(event) => this.handlerChange(event, 'username')}/>
                <br/>
                <label>Contraseña: </label>
                <input onChange={(event) => this.handlerChange(event, 'password')}/>
                <br/>
                <label>Confirmar contraseña: </label>
                <input onChange={(event) => this.handlerChange(event, 'confirmPassword')}/>
                <br/>
                <br/>
                <button onClick={this.handlerClick}>Crear!</button>
            </div>
        )
    }
}

export default UserForm;